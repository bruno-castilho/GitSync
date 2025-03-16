'use client'
import {
  Avatar,
  AvatarProps,
  Box,
  BoxProps,
  Card,
  CardProps,
  styled,
} from '@mui/material'
import Link from 'next/link'

export const UserContentCard = styled(Card)<CardProps>({
  width: '700px',
})

export const UserContentContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: '700px',
  display: 'flex',
  justifyContent: 'left',
  gap: theme.spacing(1),
  margin: theme.spacing(1),
}))

export const UserAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  height: '48px',
  width: '48px',
  margintTop: theme.spacing(1),
}))

export const UserContentHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignContent: 'center',
  gap: theme.spacing(1),
  textAlign: 'center',
}))

export const SpanCounter = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
  '&::before': {
    content: '"•"',
  },
}))

export const LinkCustom = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))
