import { Skeleton, TableRow } from '@mui/material'
import { TableCellCustom } from '../../styles'

export function RepositoriesTableRowSkeleton() {
  return (
    <TableRow>
      <TableCellCustom component="th" scope="row" align="left">
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: '0.875rem' }}
        />
      </TableCellCustom>
      <TableCellCustom component="th" scope="row" align="left">
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: '0.875rem' }}
        />
      </TableCellCustom>
      <TableCellCustom component="th" scope="row" align="center">
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: '0.875rem' }}
        />
      </TableCellCustom>
      <TableCellCustom
        component="th"
        scope="row"
        align="right"
        sx={{ display: 'flex', gap: 1 }}
      >
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: 82,
            height: 32,
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: 92,
            height: 32,
          }}
        />
      </TableCellCustom>
    </TableRow>
  )
}
