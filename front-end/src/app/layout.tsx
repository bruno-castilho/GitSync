import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ReactNode } from 'react'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { defaultTheme } from '@/theme'
import { AlertContextProvider } from '../contexts/AlertContext'
import { NotificationsSSEContextProvider } from '../contexts/NotificationsSSEContext'
import { randomUUID } from 'crypto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <head>
        <title>GitExport</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://github.githubassets.com/favicons/favicon-dark.svg"
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AlertContextProvider>
              <NotificationsSSEContextProvider
                notificationConnectionID={randomUUID()}
              >
                <DefaultLayout>{children}</DefaultLayout>
              </NotificationsSSEContextProvider>
            </AlertContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
