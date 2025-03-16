import { github } from '@/lib/axios'
import { SearchUserItemGitHub } from '@/types/SearchUserItemGitHub'

interface SearchUsersParams {
  params: {
    q: string
    per_page?: number
    page?: number
  }
}

interface SearchUsersResponse {
  total_count: number
  items: SearchUserItemGitHub[]
}

export async function searchUsers({ params }: SearchUsersParams) {
  const response = await github.get<SearchUsersResponse>('/search/users', {
    params,
  })

  return response.data
}
