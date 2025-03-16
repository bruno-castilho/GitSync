'use client'
import { Box, BoxProps, styled } from '@mui/material'

export const UserListContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))
