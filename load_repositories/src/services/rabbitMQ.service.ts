import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { connect, Channel, Connection } from 'amqplib'
import { randomUUID } from 'crypto'
import { PayloadNotificationsQueue } from 'src/types/PayloadNotificationsQueue'

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
  private connection: Connection
  private channel: Channel

  async onModuleInit() {
    this.connection = await connect('amqp://localhost')
    this.channel = await this.connection.createChannel()
  }

  async onModuleDestroy() {
    await this.channel.close()
    await this.connection.close()
  }

  async sendMessage(
    type: 'error' | 'success',
    msg: string,
    notificationConnectionID: string,
  ) {
    const queue = `notifications_queue_${notificationConnectionID}`

    await this.channel.assertQueue(queue, { durable: false, autoDelete: true })

    const message: PayloadNotificationsQueue = {
      id: randomUUID(),
      type,
      msg,
      notificationConnectionID,
    }

    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: false,
    })
  }
}
