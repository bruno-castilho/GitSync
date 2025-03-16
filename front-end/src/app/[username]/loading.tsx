import { Box, Divider } from '@mui/material'
import { RepositoryListContainer } from './components/RepositoryList/styles'
import { UserContentSkeleton } from './components/UserContentSkeleton'
import { PageContainer, PageContent } from './styles'
import { RepositoryContentSkeleton } from './components/RepositoryContentSkeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageContent>
        <UserContentSkeleton />
        <RepositoryListContainer>
          <Divider />
          {Array.from({ length: 10 }, (_, index) => (
            <Box key={index}>
              <RepositoryContentSkeleton />
              <Divider />
            </Box>
          ))}
        </RepositoryListContainer>
      </PageContent>
    </PageContainer>
  )
}
