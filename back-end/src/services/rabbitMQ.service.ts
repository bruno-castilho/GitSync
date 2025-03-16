import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { connect, Channel, Connection, ConsumeMessage } from 'amqplib'
import { randomUUID } from 'crypto'
import { Observable } from 'rxjs'
import { env } from 'src/env'

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
  private connection: Connection
  private channel: Channel

  async onModuleInit() {
    this.connection = await connect(env.RMQ_URL)
    this.channel = await this.connection.createChannel()
  }

  async onModuleDestroy() {
    await this.channel.close()
    await this.connection.close()
  }

  async sendRepositories(csv: string, notificationConnectionID: string) {
    const queue = 'repositories_queue'

    await this.channel.assertQueue(queue)

    const message = {
      id: randomUUID,
      csv,
      notificationConnectionID,
    }

    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    })
  }

  async consumeMessage(
    notificationConnectionID: string,
  ): Promise<Observable<MessageEvent>> {
    const queue = `notifications_queue_${notificationConnectionID}`

    await this.channel.assertQueue(queue, {
      durable: false,
      autoDelete: true,
    })

    return new Observable<MessageEvent>((subscriber) => {
      this.channel.consume(
        queue,
        (msg: ConsumeMessage) => {
          if (msg) {
            const event = new MessageEvent('message', {
              data: msg.content.toString(),
            })
            subscriber.next(event)
          }
        },
        { noAck: true },
      )
    })
  }
}
