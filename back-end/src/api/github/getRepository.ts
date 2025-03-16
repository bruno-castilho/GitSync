import { github } from 'src/lib/axios'
import { RepositoryGitHub } from '../../types/RepositoryGitHub'

interface GetRepositoryParams {
  path: { id: number }
}

type GetRepositoryResponse = RepositoryGitHub

export async function getRepository({ path: { id } }: GetRepositoryParams) {
  const response = await github.get<GetRepositoryResponse>(
    `/repositories/${id}`,
  )

  return response.data
}
