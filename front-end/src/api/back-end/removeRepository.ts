import { backend } from '@/lib/axios'

interface RemoveRepositoryParams {
  path: { id: number }
}

interface RemoveRepositoryResponse {
  msg: string
}

export async function removeRepository({
  path: { id },
}: RemoveRepositoryParams) {
  const response = await backend.delete<RemoveRepositoryResponse>(
    `/repositories/${id}`,
  )

  return response.data
}
