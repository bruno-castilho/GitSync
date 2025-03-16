'use client'
import {
  Container,
  ContainerProps,
  styled,
  TableCell,
  tableCellClasses,
} from '@mui/material'

export const PageContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  margin: theme.spacing(4),
  width: 'auto',

  '@media (max-width:1000px)': {
    margin: theme.spacing(3),
  },

  '@media (max-width:800px)': {
    margin: theme.spacing(2),
  },

  '@media (max-width:600px)': {
    margin: theme.spacing(1),
  },
}))

export const TableCellCustom = styled(TableCell)(({ theme }) => ({
  whiteSpace: 'nowrap',

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.grey[100],
  },
}))
