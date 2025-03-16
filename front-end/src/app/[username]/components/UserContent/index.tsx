'use client'
import { RepositoryGitHub } from '@/types/RepositoryGitHub'
import { UserGitHub } from '@/types/UserGitHub'
import { Box, Button, Typography } from '@mui/material'
import { json2csv } from 'json-2-csv'
import {
  UserAvatar,
  UserContentContainer,
  UserContentHeader,
  UserDescription,
} from './styles'
import { useContext } from 'react'
import { AlertContext } from '@/contexts/AlertContext'

interface UserContentProps {
  user: UserGitHub
  repositories: RepositoryGitHub[]
}

export function UserContent({ user, repositories }: UserContentProps) {
  const { error } = useContext(AlertContext)

  function handleExportRepositories() {
    try {
      const csv = json2csv(repositories)

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'repositorios.csv'

      link.click()
    } catch (err) {
      error('Erro ao exportar repositórios')
      console.error(err)
    }
  }

  return (
    <UserContentContainer>
      <Box sx={{ display: { xs: 'flex', sm: 'block' } }}>
        <UserContentHeader>
          <UserAvatar alt={user.name} src={user.avatar_url} />
        </UserContentHeader>
        <UserDescription>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{user.name}</strong>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {user.login}
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {user.bio && ''}
          </Typography>

          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <strong>{user.followers}</strong> followers ·{' '}
              <strong>{user.following}</strong> following
            </Typography>
          </Box>
        </UserDescription>
      </Box>
      <Button
        size="small"
        variant="contained"
        fullWidth
        onClick={handleExportRepositories}
      >
        Exportar Repositórios
      </Button>
    </UserContentContainer>
  )
}
