import { Container } from '@mui/material'
import { Header } from './Header'
import { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        {children}
      </Container>
    </>
  )
}
