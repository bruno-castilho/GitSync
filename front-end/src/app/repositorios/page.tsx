import { Card } from '@mui/material'
import { Header } from './components/Header'

import { getRepositories } from '@/api/back-end/getRepositories'
import { RepositoriesTable } from './components/RepositoriesTable'
import { PageContainer } from './styles'

interface PageProps {
  searchParams: {
    query?: string
    orderBy?: 'asc' | 'desc'
    sortBy?: 'name' | 'user_name' | 'stars'
    page?: number
    perPage?: number
  }
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams
  const query = searchParams?.query ?? ''
  const orderBy = searchParams?.orderBy ?? 'asc'
  const sortBy = searchParams?.sortBy ?? 'name'
  const page = searchParams?.page ?? 1
  const perPage = searchParams?.perPage ?? 10

  const {
    meta: { totalCount },
    repositories,
  } = await getRepositories({
    params: {
      query,
      orderBy,
      sortBy,
      page,
      perPage,
    },
  })

  return (
    <PageContainer component={Card} maxWidth={false} disableGutters>
      <Header />
      <RepositoriesTable
        repositories={repositories}
        totalCount={totalCount}
        page={page}
        perPage={perPage}
      />
    </PageContainer>
  )
}
