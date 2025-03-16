import { Box, Skeleton } from '@mui/material'
import {
  UserContentCard,
  UserContentContainer,
  UserContentHeader,
} from '../UserContent/styles'

export function UserContentSkeleton() {
  return (
    <UserContentCard>
      <UserContentContainer>
        <Skeleton variant="circular" sx={{ height: 48, width: 48, mt: 1 }} />

        <Box>
          <UserContentHeader>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '2rem', minWidth: 200 }}
            />

            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '2rem', minWidth: 200 }}
            />
          </UserContentHeader>

          <Box sx={{ width: '400px' }}>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '1rem', minWidth: 200 }}
            />
          </Box>

          <Box display="flex" gap={1}>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '1rem', minWidth: 200 }}
            />
          </Box>
        </Box>
      </UserContentContainer>
    </UserContentCard>
  )
}
