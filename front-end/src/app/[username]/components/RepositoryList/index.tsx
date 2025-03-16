'use client'
import { Box, Button, Divider } from '@mui/material'
import {
  RepositoryListContainer,
  RepositoryPaginationContainer,
} from './styles'
import { RepositoryContent } from '../RepositoryContent'
import {
  KeyboardArrowLeftSharp,
  KeyboardArrowRightSharp,
} from '@mui/icons-material'
import { RepositoryGitHub } from '@/types/RepositoryGitHub'
import { useState } from 'react'

interface RepositoryListProps {
  repositories: RepositoryGitHub[]
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  const [page, setPage] = useState<number>(0)

  const firstIndex = page * 10
  const lastIndex = firstIndex + 10
  const repositoriesPaged = repositories.slice(firstIndex, lastIndex)

  const isFirstPage = page === 0
  const isLastPage = lastIndex >= repositories.length

  function handleNextPage() {
    setPage((state) => {
      if (!isLastPage) return state + 1
      return state
    })
  }

  function handlePreviousPage() {
    setPage((state) => {
      if (!isFirstPage) return state - 1
      return state
    })
  }

  return (
    <RepositoryListContainer>
      <Divider />
      {repositoriesPaged.map((repository) => (
        <Box key={repository.id}>
          <RepositoryContent repository={repository} />
          <Divider />
        </Box>
      ))}
      <RepositoryPaginationContainer>
        <Button
          startIcon={<KeyboardArrowLeftSharp />}
          onClick={handlePreviousPage}
          disabled={isFirstPage}
        >
          Anterior
        </Button>
        <Button
          endIcon={<KeyboardArrowRightSharp />}
          onClick={handleNextPage}
          disabled={isLastPage}
        >
          Próximo
        </Button>
      </RepositoryPaginationContainer>
    </RepositoryListContainer>
  )
}
