'user client'

import {
  Avatar,
  AvatarProps,
  Box,
  BoxProps,
  Input,
  InputProps,
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeaderContainer = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '16px 16px',
})

export const HeaderDescription = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

export const HeaderAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  background: theme.palette.primary.light,
}))

export const HeaderActions = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'right',
  gap: theme.spacing(1),
}))

export const SearchBarContainer = styled(Box)<BoxProps>({
  margin: '16px 16px',
})

export const UploadInput = styled(Input)<InputProps>(({ theme }) => ({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: theme.spacing(1),
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: theme.spacing(1),
}))
