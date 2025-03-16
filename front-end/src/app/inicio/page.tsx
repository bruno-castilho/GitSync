import { SearchBar } from '@/components/SearchBar'
import { UserList } from './components/UserList'
import { searchUsers } from '@/api/github/searchUsers'
import { notFound } from 'next/navigation'
import { getUser } from '@/api/github/getUser'
import { PageContainer, SearchBarContainer } from './style'
export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: Promise<{
    query?: string
    page: number
  }>
}

export default async function Page(props: PageProps) {
  try {
    const searchParams = await props.searchParams
    const query = searchParams?.query ?? 'a'
    const page = searchParams?.page ?? 1

    const { total_count: totalCount, items } = await searchUsers({
      params: {
        q: query,
        per_page: 5,
        page,
      },
    })

    const users = await Promise.all(
      items.map((user) => getUser({ path: { username: user.login } })),
    )

    return (
      <PageContainer>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>

        <UserList users={users} totalCount={totalCount} />
      </PageContainer>
    )
  } catch (e) {
    console.log(e)
    notFound()
  }
}
