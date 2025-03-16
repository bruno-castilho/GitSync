import { backend } from '@/lib/axios'

interface UploadRepositoriesParams {
  formData: FormData
}

interface UploadRepositoriesResponse {
  msg: string
}

export async function uploadRepositories({
  formData,
}: UploadRepositoriesParams) {
  const response = await backend.post<UploadRepositoriesResponse>(
    `/repositories/upload`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return response.data
}
