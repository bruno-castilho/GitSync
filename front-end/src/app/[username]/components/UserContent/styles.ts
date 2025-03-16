'use client'
import { Avatar, AvatarProps, Box, BoxProps, styled } from '@mui/material'

export const UserContentContainer = styled(Box)<BoxProps>(({ theme }) => ({
  minWidth: '100%',
  [theme.breakpoints.up('sm')]: {
    minWidth: 300,
  },
}))

export const UserContentHeader = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const UserAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  height: 96,
  width: 96,
  [theme.breakpoints.up('sm')]: {
    height: 192,
    width: 192,
  },
}))

export const UserDescription = styled(Box)<BoxProps>(({ theme }) => ({
  margin: theme.spacing(2),
}))
