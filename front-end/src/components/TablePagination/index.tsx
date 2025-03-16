'user client'
import { TablePagination as TablePaginationMUI } from '@mui/material'
import { useRouter } from 'next/navigation'

interface TablePaginationProps {
  totalCount: number | undefined
  disabled: boolean
  page: number
  perPage: number
}

export function TablePagination({
  totalCount,
  disabled,
  page,
  perPage,
}: TablePaginationProps) {
  const router = useRouter()

  function handleChangePage(
    _event: React.MouseEvent<HTMLButtonElement> | null,
    pageIndex: number,
  ) {
    const params = new URLSearchParams(window.location.search)
    params.set('page', (pageIndex + 1).toString())

    router.push(`?${params.toString()}`)
  }

  function handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const params = new URLSearchParams(window.location.search)
    params.set('perPage', event.target.value ?? '10')

    router.push(`?${params.toString()}`)
  }

  return (
    <TablePaginationMUI
      component="div"
      labelRowsPerPage="Linhas por página"
      labelDisplayedRows={({ from, to, count }) => {
        return `${from}–${to} de ${count !== -1 ? count : `mais do que ${to}`}`
      }}
      rowsPerPageOptions={[10, 25, 50, 100]}
      count={totalCount || 0}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPage={perPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      disabled={disabled}
    />
  )
}
