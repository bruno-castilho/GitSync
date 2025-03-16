import { UserContent } from './components/UserContent'
import { getUser } from '@/api/github/getUser'
import { notFound } from 'next/navigation'
import { getRepositories } from '@/api/github/getRepositories'
import { PageContainer, PageContent } from './styles'
import { RepositoryList } from './components/RepositoryList'
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ username: string }>
}

export default async function Page({ params }: PageProps) {
  try {
    const { username } = await params

    const [user, repositories] = await Promise.all([
      getUser({ path: { username } }),
      getRepositories({ path: { username } }),
    ])

    return (
      <PageContainer>
        <PageContent>
          <UserContent user={user} repositories={repositories} />
          <RepositoryList repositories={repositories} />
        </PageContent>
      </PageContainer>
    )
  } catch (e) {
    console.log(e)
    notFound()
  }
}
