'use client'
import { env } from '@/env'
import { PayloadNotificationsQueue } from '@/types/PayloadNotificationsQueue'
import { createContext, ReactNode } from 'react'

interface NotificationsSSEContextType {
  getNotificationConnectionID: () => string
  connectToNotifications: (
    handleNotificaion: (data: PayloadNotificationsQueue) => void,
  ) => void
}

export const NotificationsSSEContext = createContext(
  {} as NotificationsSSEContextType,
)

interface NotificationsSSEContextProviderProps {
  notificationConnectionID: string
  children: ReactNode
}

export function NotificationsSSEContextProvider({
  notificationConnectionID,
  children,
}: NotificationsSSEContextProviderProps) {
  function getNotificationConnectionID() {
    return notificationConnectionID
  }

  function connectToNotifications(
    handleNotificaion: (data: PayloadNotificationsQueue) => void,
  ) {
    const eventSource = new EventSource(
      `${env.BACK_END_URL}/notifications/sse/${notificationConnectionID}`,
    )

    eventSource.onmessage = function (event) {
      const data = JSON.parse(event.data) as PayloadNotificationsQueue
      handleNotificaion(data)
    }

    return () => {
      eventSource.close()
    }
  }

  return (
    <NotificationsSSEContext.Provider
      value={{
        getNotificationConnectionID,
        connectToNotifications,
      }}
    >
      {children}
    </NotificationsSSEContext.Provider>
  )
}
