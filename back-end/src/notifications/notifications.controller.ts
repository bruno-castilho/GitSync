import { Controller, MessageEvent, Param, Sse } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { Observable } from 'rxjs'

import { RabbitMQService } from 'src/services/rabbitMQ.service'

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Sse('sse/:notificationConnectionID')
  @ApiResponse({
    status: 200,
    content: {
      'text/event-stream': {
        schema: {
          type: 'object',
          properties: {
            data: { type: 'string' },
          },
        },
      },
    },
  })
  async receiveNotifications(
    @Param('notificationConnectionID') notificationConnectionID: string,
  ): Promise<Observable<MessageEvent>> {
    const observable = await this.rabbitMQService.consumeMessage(
      notificationConnectionID,
    )

    return new Observable<MessageEvent>((subscriber) => {
      observable.subscribe({
        next: (event: MessageEvent) => {
          subscriber.next(event)
        },
        error: (err) => {
          console.error(err)
        },
        complete: () => {
          subscriber.complete()
        },
      })
    })
  }
}
