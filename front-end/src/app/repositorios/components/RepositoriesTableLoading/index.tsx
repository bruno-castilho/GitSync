'use client'
import { Table, TableBody, TableContainer } from '@mui/material'
import { RepositoriesTableHead } from '../RepositoriesTableHead'
import { TablePagination } from '@/components/TablePagination'
import { RepositoriesTableRowSkeleton } from '../RepositoriesTableRowSkeleton'

export function RepositoriesTableLoading() {
  return (
    <TableContainer>
      <Table sx={{ width: '100%' }} size="small">
        <RepositoriesTableHead />
        <TableBody>
          {Array.from({ length: 10 }, (_, index) => (
            <RepositoriesTableRowSkeleton key={index} />
          ))}
        </TableBody>
      </Table>
      <TablePagination page={1} perPage={10} totalCount={0} disabled={true} />
    </TableContainer>
  )
}
