import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ReactNode } from 'react'
import { DefaultLayout } from '../layouts/DefaultLayout'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <DefaultLayout>{children}</DefaultLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
