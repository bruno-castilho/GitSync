import { env } from '@/env'
import axios from 'axios'

export const github = axios.create({
  baseURL: env.GIT_HUB_URL,
})

export const backend = axios.create({
  baseURL: env.BACK_END_URL,
})
