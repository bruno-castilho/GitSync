'use client'
import { Box, BoxProps, styled } from '@mui/material'

export const PageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  mt: theme.spacing(4),
}))

export const PageContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: theme.spacing(2),
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}))
