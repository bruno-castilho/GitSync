'use client'
import { styled } from '@mui/material'
import Link, { LinkProps } from 'next/link'

export const LinkCustom = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}))
