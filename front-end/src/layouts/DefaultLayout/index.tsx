'use client'
import { Container } from '@mui/material'
import { Header } from './Header'
import { ReactNode, useContext, useEffect } from 'react'
import { AlertContext } from '@/contexts/AlertContext'
import { NotificationsSSEContext } from '@/contexts/NotificationsSSEContext'
import { AlertComponent } from '@/components/AlertComponent'
import { PayloadNotificationsQueue } from '@/types/PayloadNotificationsQueue'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { success, error } = useContext(AlertContext)
  const { connectToNotifications } = useContext(NotificationsSSEContext)

  function handleNotificaion(data: PayloadNotificationsQueue) {
    if (data.type === 'success') success(data.msg)

    if (data.type === 'error') error(data.msg)
  }

  useEffect(() => {
    connectToNotifications(handleNotificaion)
  }, [])

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        {children}
      </Container>
      <AlertComponent />
    </>
  )
}
