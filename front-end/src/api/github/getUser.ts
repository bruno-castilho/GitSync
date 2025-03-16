import { UserGitHub } from '@/types/UserGitHub'
import { github } from '@/lib/axios'

interface GetUserParams {
  path: { username: string }
}

type GetUserResponse = UserGitHub

export async function getUser({ path: { username } }: GetUserParams) {
  const response = await github.get<GetUserResponse>(`/users/${username}`)

  return response.data
}
