'use client'
import { Container, ContainerProps, styled } from '@mui/material'

export const PageContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginTop: theme.spacing(4),
}))

export const SearchBarContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  }),
)
