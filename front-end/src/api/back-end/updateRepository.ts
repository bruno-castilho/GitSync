import { backend } from '@/lib/axios'
import { Repository } from '@/types/Repository'

interface UpdateRepositoryParams {
  path: { id: number }
}

interface UpdateRepositoryResponse {
  repository: Repository
}

export async function updateRepository({
  path: { id },
}: UpdateRepositoryParams) {
  const response = await backend.put<UpdateRepositoryResponse>(
    `/repositories/${id}`,
  )

  return response.data
}
