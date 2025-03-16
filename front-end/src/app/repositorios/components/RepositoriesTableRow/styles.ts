import { styled } from '@mui/material'
import Link from 'next/link'

export const LinkCustom = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline', // Adiciona sublinhado ao passar o mouse
  },
}))
