import { TableHead, TableRow } from '@mui/material'
import { TableSortLabel } from '@/components/TableSortLabel'
import { TableCellCustom } from '../../styles'

export function RepositoriesTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCellCustom align="left">
          <TableSortLabel label="name" defaultLabel="name">
            Nome
          </TableSortLabel>
        </TableCellCustom>
        <TableCellCustom align="left" sx={{ width: 280 }}>
          <TableSortLabel label="user_name" defaultLabel="name">
            Proprietário
          </TableSortLabel>
        </TableCellCustom>
        <TableCellCustom align="center" sx={{ width: 80 }}>
          <TableSortLabel label="stars" defaultLabel="name">
            Estrelas
          </TableSortLabel>
        </TableCellCustom>
        <TableCellCustom sx={{ width: 200 }} />
      </TableRow>
    </TableHead>
  )
}
