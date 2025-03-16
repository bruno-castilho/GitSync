import { Meta } from '@/types/Meta'
import { Repository } from '@/types/Repository'
import { backend } from '@/lib/axios'

interface GetRepositoriesParams {
  params: {
    page?: number
    perPage?: number
    query?: string
    sortBy?: 'name' | 'user_name' | 'stars'
    orderBy?: 'desc' | 'asc'
  }
}

interface GetRepositoriesResponse {
  meta: Meta
  repositories: Repository[]
}

export async function getRepositories({ params }: GetRepositoriesParams) {
  const response = await backend.get<GetRepositoriesResponse>('/repositories', {
    params,
  })

  return response.data
}
