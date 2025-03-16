'use client'
import { Button, TableRow } from '@mui/material'
import { Repository } from '@/types/Repository'
import { useState } from 'react'
import { LinkCustom } from './styles'
import { TableCellCustom } from '../../styles'

interface RepositoriesTableRowProps {
  repository: Repository
  onRemoveRepository: (id: number) => Promise<void>
  onUpdateRepository: (id: number) => Promise<void>
}

export function RepositoriesTableRow({
  repository,
  onRemoveRepository,
  onUpdateRepository,
}: RepositoriesTableRowProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleRemoveRepository() {
    setIsLoading(true)
    await onRemoveRepository(repository.id)
    setIsLoading(false)
  }

  async function handleUpdateRepository() {
    setIsLoading(true)
    await onUpdateRepository(repository.id)
    setIsLoading(false)
  }

  return (
    <TableRow>
      <TableCellCustom component="th" scope="row" align="left">
        <LinkCustom
          href={repository.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repository.name}
        </LinkCustom>
      </TableCellCustom>
      <TableCellCustom component="th" scope="row" align="left">
        {repository.user_name}
      </TableCellCustom>
      <TableCellCustom component="th" scope="row" align="center">
        {repository.stars}
      </TableCellCustom>
      <TableCellCustom component="th" scope="row" align="right">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleUpdateRepository}
          loading={isLoading}
        >
          Atualizar
        </Button>

        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ ml: 1 }}
          onClick={handleRemoveRepository}
          loading={isLoading}
        >
          Remover
        </Button>
      </TableCellCustom>
    </TableRow>
  )
}
