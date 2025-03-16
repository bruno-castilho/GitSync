import { Global, Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'
import { RepositoriesModule } from './repositories/repositories.module'
import { RabbitMQService } from './services/rabbitMQ.service'
import { NotificationsModule } from './notifications/notifications.module'
import { RepositoriesService } from './services/repositories.service'

@Global()
@Module({
  imports: [RepositoriesModule, NotificationsModule],
  providers: [PrismaService, RabbitMQService, RepositoriesService],
  exports: [PrismaService, RabbitMQService, RepositoriesService],
})
export class AppModule {}
