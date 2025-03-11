import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ReactNode } from 'react'
import { DefaultLayout } from '../layouts/DefaultLayout'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { defaultTheme } from '@/theme'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={defaultTheme} >
          <CssBaseline />
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
