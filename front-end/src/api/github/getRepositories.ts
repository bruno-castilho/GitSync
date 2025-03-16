import { RepositoryGitHub } from '@/types/RepositoryGitHub'
import { github } from '@/lib/axios'

interface GetRepositoriesParams {
  path: { username: string }
}

type GetRepositoriesResponse = RepositoryGitHub[]

export async function getRepositories({
  path: { username },
}: GetRepositoriesParams) {
  const response = await github.get<GetRepositoriesResponse>(
    `/users/${username}/repos`,
  )

  return response.data
}
