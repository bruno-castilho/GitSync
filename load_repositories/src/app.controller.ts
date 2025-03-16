import { Controller } from '@nestjs/common'
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices'
import { csv2json } from 'json-2-csv'
import { RabbitMQService } from './services/rabbitMQ.service'
import { RepositoriesService } from './services/repositories.service'
import { z } from 'zod'

@Controller()
export class AppController {
  constructor(
    private readonly rabbitMQService: RabbitMQService,
    private readonly repositories: RepositoriesService,
  ) {}

  @EventPattern()
  async recivingRepositories(
    @Payload() payload: any,
    @Ctx() context: RmqContext,
  ) {
    try {
      const channel = context.getChannelRef()
      const originalMsg = context.getMessage()

      const recivingRepositoriesPayloadSchema = z.object({
        csv: z.string(),
        notificationConnectionID: z.string(),
      })

      const { csv, notificationConnectionID } =
        recivingRepositoriesPayloadSchema.parse(payload)

      const csvContent = csv2json(csv)

      const csvContentSchema = z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          stargazers_count: z.number(),
          owner: z.object({
            login: z.string(),
          }),
          html_url: z.string(),
        }),
      )

      const { success, data } = csvContentSchema.safeParse(csvContent)

      if (!success) {
        this.rabbitMQService.sendMessage(
          'error',
          'Não foi possível carregar os repositórios (dados inválidos)!',
          notificationConnectionID,
        )
        channel.ack(originalMsg)
        return
      }

      const repositories = data.map((repository) => {
        return {
          id: repository.id,
          name: repository.name,
          stars: repository.stargazers_count,
          url: repository.html_url,
          user_name: repository.owner.login,
        }
      })

      await this.repositories.createMany({
        data: repositories,
        skipDuplicates: true,
      })

      this.rabbitMQService.sendMessage(
        'success',
        'Repositórios carregados com sucesso!',
        notificationConnectionID,
      )

      channel.ack(originalMsg)
    } catch (error) {
      console.error(error)
    }
  }
}
