import { z } from 'zod'

const envSchema = z.object({
  RMQ_URL: z.string().default('amqp://rabbitmq'),
  DATABASE_URL: z.string(),
})

export const env = envSchema.parse(process.env)
