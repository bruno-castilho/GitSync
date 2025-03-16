import { CardMembershipSharp, PeopleOutlineSharp } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import {
  LinkCustom,
  SpanCounter,
  UserAvatar,
  UserContentCard,
  UserContentContainer,
  UserContentHeader,
} from './styles'
import { UserGitHub } from '@/types/UserGitHub'

interface UserContentProps {
  user: UserGitHub
}

export function UserContent({ user }: UserContentProps) {
  return (
    <UserContentCard>
      <UserContentContainer>
        <UserAvatar alt={user.name} src={user.avatar_url} />

        <Box>
          <UserContentHeader>
            <LinkCustom href={`/${user.login}`}>
              <Typography variant="h6" color="primary">
                {user.name}
              </Typography>
            </LinkCustom>

            <LinkCustom href={`/${user.login}`}>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                {user.login}
              </Typography>
            </LinkCustom>
          </UserContentHeader>

          <Box sx={{ width: '400px' }}>
            <Typography>{user.bio}</Typography>
          </Box>

          <Box display="flex" gap={1}>
            <Typography variant="body2">{user.location}</Typography>

            <SpanCounter component="span">
              <CardMembershipSharp fontSize="inherit" />
              <Typography variant="body2">{user.public_repos}</Typography>
            </SpanCounter>

            <SpanCounter component="span">
              <PeopleOutlineSharp fontSize="inherit" />
              <Typography variant="body2">{user.followers}</Typography>
            </SpanCounter>
          </Box>
        </Box>
      </UserContentContainer>
    </UserContentCard>
  )
}
