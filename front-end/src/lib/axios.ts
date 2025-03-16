import axios from 'axios'

export const github = axios.create({
  baseURL: 'https://api.github.com/',
})

export const backend = axios.create({
  baseURL: 'http://localhost:3000',
})
