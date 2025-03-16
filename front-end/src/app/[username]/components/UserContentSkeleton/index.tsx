import { Box, Skeleton } from '@mui/material'
import {
  UserContentContainer,
  UserContentHeader,
  UserDescription,
} from '../UserContent/styles'

export function UserContentSkeleton() {
  return (
    <UserContentContainer>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'block' },
        }}
      >
        <UserContentHeader>
          <Skeleton
            variant="circular"
            sx={{ height: { xs: 96, sm: 192 }, width: { xs: 96, sm: 192 } }}
          />
        </UserContentHeader>
        <UserDescription>
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: '2rem', minWidth: 200 }}
          />

          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: '1rem', minWidth: 200 }}
          />

          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: '1rem', minWidth: 200 }}
          />

          <Box>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: '1rem' }}
            />
          </Box>
        </UserDescription>
      </Box>
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{
          height: 32,
        }}
      />
    </UserContentContainer>
  )
}
