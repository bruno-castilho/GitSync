import { Card } from '@mui/material'
import { PageContainer } from './styles'
import { Header } from './components/Header'
import { RepositoriesTableLoading } from './components/RepositoriesTableLoading'

export default async function Loading() {
  return (
    <PageContainer component={Card} maxWidth={false} disableGutters>
      <Header />
      <RepositoriesTableLoading />
    </PageContainer>
  )
}
