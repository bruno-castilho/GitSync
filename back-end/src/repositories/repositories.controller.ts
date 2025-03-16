import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'

import { FileInterceptor } from '@nestjs/platform-express'
import { getRepository } from 'src/api/github/getRepository'
import { RepositoriesService } from 'src/services/repositories.service'
import { RabbitMQService } from 'src/services/rabbitMQ.service'
import { z } from 'zod'
import { ApiConsumes, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger'
import { GetRepositoriesResponse } from 'src/swagger/responses/GetRepositoriesResponse'
import { UpdateRepositoryResponse } from 'src/swagger/responses/UpdateRepositoryResponse'
import { RemoveRepositoryReponse } from 'src/swagger/responses/RemoveRepositoryReponse'

@Controller('repositories')
export class RepositoriesController {
  constructor(
    private readonly rabbitMQService: RabbitMQService,
    private readonly repositories: RepositoriesService,
  ) {}

  @Get()
  @ApiQuery({
    name: 'query',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    default: 1,
  })
  @ApiQuery({
    name: 'perPage',
    required: false,
    type: Number,
    default: 10,
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    enum: ['asc', 'desc'],
    default: 'asc',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    enum: ['name', 'user_name', 'stars'],
    default: 'name',
  })
  @ApiResponse({
    status: 200,
    type: GetRepositoriesResponse,
  })
  async getRepositories(
    @Query()
    params: any,
  ) {
    const paramsSchema = z.object({
      query: z.string().default(''),
      page: z
        .string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => val >= 1, { message: 'page must be at least 1' })
        .default('1'),
      perPage: z
        .string()
        .transform((val) => parseInt(val, 10))
        .refine((val) => val >= 1, { message: 'perPage must be at least 1' })
        .default('10'),
      orderBy: z.enum(['asc', 'desc']).default('asc'),
      sortBy: z.enum(['name', 'user_name', 'stars']).default('name'),
    })

    const { success, error, data } = paramsSchema.safeParse(params)

    if (!success)
      throw new BadRequestException({
        msg: error.errors.map((e) => e.message).join(', '),
      })

    const { page, perPage, orderBy, query, sortBy } = data

    const [repositories, totalCount] = await Promise.all([
      this.repositories.findMany({
        where: {
          OR: [
            { name: { contains: query } },
            { user_name: { contains: query } },
          ],
        },
        orderBy: {
          [sortBy]: orderBy,
        },
        skip: (page - 1) * perPage,
        take: perPage,
      }),

      this.repositories.count({
        where: {
          OR: [
            { name: { contains: query } },
            { user_name: { contains: query } },
          ],
        },
      }),
    ])

    return {
      meta: {
        page,
        perPage,
        totalCount,
      },
      repositories,
    }
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: UpdateRepositoryResponse,
  })
  async updateRepository(
    @Param()
    params: {
      id: string
    },
  ) {
    const id = parseInt(params.id)

    const {
      name,
      owner: { login },
      html_url: url,
      stargazers_count: stars,
    } = await getRepository({ path: { id } })

    const repository = await this.repositories.update({
      where: { id },
      data: {
        name,
        stars,
        user_name: login,
        url,
      },
    })

    return {
      repository,
    }
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: RemoveRepositoryReponse,
  })
  async removeRepository(
    @Param()
    params: {
      id: string
    },
  ) {
    const id = parseInt(params.id)

    await this.repositories.delete({ id })

    return {
      msg: 'Repositório removido com sucesso!',
    }
  }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  uploadRepositories(
    @Body() body: any,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'text/csv',
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    const csv = file.buffer.toString()

    const bodySchema = z.object({
      notificationConnectionID: z.string(),
    })

    const { success, error, data } = bodySchema.safeParse(body)

    if (!success)
      throw new BadRequestException({
        msg: error.errors.map((e) => e.message).join(', '),
      })

    const { notificationConnectionID } = data

    this.rabbitMQService.sendRepositories(csv, notificationConnectionID)

    return {
      msg: 'Repositório encaminhado para processamento!',
    }
  }
}
