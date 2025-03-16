import { z } from 'zod'

const envSchema = z.object({
  BACK_END_URL: z.string().default('http://localhost:8080/api'),
  GIT_HUB_URL: z.string().default('https://api.github.com/'),
})

export const env = envSchema.parse(process.env)
