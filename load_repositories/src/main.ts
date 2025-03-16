import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { env } from './env'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [env.RMQ_URL],
        queue: 'repositories_queue',
        queueOptions: { durable: true },
        noAck: false,
        consumerTag: 'repositories_load',
      },
    },
  )

  await app.listen()
}
bootstrap()
