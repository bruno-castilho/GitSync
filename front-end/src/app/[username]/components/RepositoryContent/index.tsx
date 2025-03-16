import { RepositoryGitHub } from '@/types/RepositoryGitHub'
import { StarBorderRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import {
  LinkCustom,
  RepositoryContentContainer,
  RepositorySummary,
  StarsCountContainer,
} from './styles'

interface RepositoryContentProps {
  repository: RepositoryGitHub
}

export function RepositoryContent({ repository }: RepositoryContentProps) {
  return (
    <RepositoryContentContainer>
      <RepositorySummary>
        <LinkCustom
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h6" color="primary">
            <strong>{repository.name}</strong>
          </Typography>
        </LinkCustom>
        <StarsCountContainer>
          <StarBorderRounded color="primary" />
          <Typography variant="body2">
            <strong>Stars</strong> {repository.stargazers_count}
          </Typography>
        </StarsCountContainer>
      </RepositorySummary>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Updated 1 hour ago
      </Typography>
    </RepositoryContentContainer>
  )
}
