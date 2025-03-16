import { Skeleton } from '@mui/material'
import {
  RepositoryContentContainer,
  RepositorySummary,
  StarsCountContainer,
} from '../RepositoryContent/styles'

export function RepositoryContentSkeleton() {
  return (
    <RepositoryContentContainer>
      <RepositorySummary>
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: '2rem', width: 200 }}
        />

        <StarsCountContainer>
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: '1rem', width: 80 }}
          />
        </StarsCountContainer>
      </RepositorySummary>
      <Skeleton
        animation="wave"
        variant="text"
        sx={{ fontSize: '1rem', width: 180 }}
      />
    </RepositoryContentContainer>
  )
}
