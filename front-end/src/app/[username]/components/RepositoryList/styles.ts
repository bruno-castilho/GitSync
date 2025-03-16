'use client'
import { Box, BoxProps, styled } from '@mui/material'

export const RepositoryListContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginTop: 0,
  },
}))

export const RepositoryPaginationContainer = styled(Box)<BoxProps>(
  ({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  }),
)
