'use client'
import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#143d59',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f4b41a',
      contrastText: '#fff',
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        secondary: {
          main: '#143d59',
          contrastText: '#fff',
        },
        primary: {
          main: '#f4b41a',
          contrastText: '#fff',
        },
      },
    },
  },
})
