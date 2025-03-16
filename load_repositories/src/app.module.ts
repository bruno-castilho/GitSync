import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './services/prisma.service'
import { RabbitMQService } from './services/rabbitMQ.service'
import { RepositoriesService } from './services/repositories.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, RabbitMQService, RepositoriesService],
})
export class AppModule {}
