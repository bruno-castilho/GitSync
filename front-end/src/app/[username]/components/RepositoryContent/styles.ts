'use client'
import { Box, BoxProps, styled } from '@mui/material'
import Link from 'next/link'

export const RepositoryContentContainer = styled(Box)<BoxProps>(
  ({ theme }) => ({
    padding: theme.spacing(2),
  }),
)

export const RepositorySummary = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
})

export const LinkCustom = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))

export const StarsCountContainer = styled(Box)<BoxProps>(({ theme }) => ({
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}))
