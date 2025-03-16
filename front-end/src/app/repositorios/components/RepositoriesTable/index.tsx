'use client'
import { TableContainer, Table, TableBody } from '@mui/material'
import { Repository } from '@/types/Repository'
import { TablePagination } from '@/components/TablePagination'
import { RepositoriesTableHead } from '../RepositoriesTableHead'
import { RepositoriesTableRow } from '../RepositoriesTableRow'
import { useContext, useEffect, useState } from 'react'
import { removeRepository } from '@/api/back-end/removeRepository'
import { updateRepository } from '@/api/back-end/updateRepository'
import { AlertContext } from '@/contexts/AlertContext'
import axios from 'axios'

interface RepositoriesTableProps {
  page: number
  perPage: number
  repositories: Repository[]
  totalCount: number
}

export function RepositoriesTable({
  page,
  perPage,
  repositories,
  totalCount,
}: RepositoriesTableProps) {
  const [repositoriesState, setRepositoriesState] =
    useState<Repository[]>(repositories)

  const { success, error } = useContext(AlertContext)

  async function onRemoveRepository(id: number) {
    try {
      await removeRepository({
        path: {
          id,
        },
      })

      setRepositoriesState((state) =>
        state.filter((repository) => repository.id !== id),
      )

      success('Repositório removido com sucesso!')
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.data.msg)
        return error(e.response.data.msg)
      error('Algo não ocorreu bem')
      console.error(e)
    }
  }

  async function onUpdateRepository(id: number) {
    try {
      const response = await updateRepository({
        path: {
          id,
        },
      })

      setRepositoriesState((state) =>
        state.map((repository) => {
          if (repository.id === id)
            return {
              id: response.repository.id,
              name: response.repository.name,
              stars: response.repository.stars,
              url: response.repository.url,
              user_name: response.repository.user_name,
            }

          return repository
        }),
      )
      success('Repositório atualizado com sucesso!')
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.data.msg)
        return error(e.response.data.msg)
      error('Algo não ocorreu bem')
      console.error(e)
    }
  }

  useEffect(() => {
    setRepositoriesState(repositories)
  }, [repositories])

  return (
    <TableContainer>
      <Table sx={{ width: '100%' }} size="small">
        <RepositoriesTableHead />
        <TableBody>
          {repositoriesState.map((repository) => (
            <RepositoriesTableRow
              key={repository.id}
              repository={repository}
              onRemoveRepository={onRemoveRepository}
              onUpdateRepository={onUpdateRepository}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        page={page}
        perPage={perPage}
        totalCount={totalCount}
        disabled={false}
      />
    </TableContainer>
  )
}
