import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { Repository, Prisma } from '@prisma/client'

@Injectable()
export class RepositoriesService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    RepositoryWhereUniqueInput: Prisma.RepositoryWhereUniqueInput,
  ): Promise<Repository | null> {
    return await this.prisma.repository.findUnique({
      where: RepositoryWhereUniqueInput,
    })
  }

  async count(params: {
    skip?: number
    take?: number
    cursor?: Prisma.RepositoryWhereUniqueInput
    where?: Prisma.RepositoryWhereInput
    orderBy?: Prisma.RepositoryOrderByWithRelationInput
  }): Promise<number> {
    const { skip, take, cursor, where, orderBy } = params
    return await this.prisma.repository.count({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async findMany(params: {
    skip?: number
    take?: number
    cursor?: Prisma.RepositoryWhereUniqueInput
    where?: Prisma.RepositoryWhereInput
    orderBy?: Prisma.RepositoryOrderByWithRelationInput
  }): Promise<Repository[]> {
    const { skip, take, cursor, where, orderBy } = params
    return await this.prisma.repository.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async create(data: Prisma.RepositoryCreateInput): Promise<Repository> {
    return await this.prisma.repository.create({
      data,
    })
  }

  async createMany(params: {
    data: Prisma.RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }): Promise<Prisma.BatchPayload> {
    const { data, skipDuplicates } = params
    return await this.prisma.repository.createMany({
      data,
      skipDuplicates,
    })
  }

  async update(params: {
    where: Prisma.RepositoryWhereUniqueInput
    data: Prisma.RepositoryUpdateInput
  }): Promise<Repository> {
    const { data, where } = params
    return await this.prisma.repository.update({
      data,
      where,
    })
  }

  async delete(where: Prisma.RepositoryWhereUniqueInput): Promise<Repository> {
    return await this.prisma.repository.delete({
      where,
    })
  }
}
