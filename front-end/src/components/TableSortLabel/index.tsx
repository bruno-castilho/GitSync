'use client'
import { TableSortLabel as TableSortLabelMUI } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { ReactNode } from 'react'

interface TableSortLabelProps {
  label: string
  defaultLabel: string
  children: ReactNode
}

export function TableSortLabel({
  label,
  defaultLabel,
  children,
}: TableSortLabelProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const orderBy = (searchParams.get('orderBy') as 'desc' | 'asc') ?? 'asc'
  const sortBy = searchParams.get('sortBy') ?? defaultLabel

  function handleChangeOrder() {
    const params = new URLSearchParams(window.location.search)
    params.set('orderBy', orderBy === 'asc' ? 'desc' : 'asc')
    params.set('sortBy', label)

    router.push(`?${params.toString()}`)
  }

  return (
    <TableSortLabelMUI
      active={sortBy === label}
      direction={sortBy === label ? orderBy : 'asc'}
      onClick={() => handleChangeOrder()}
    >
      {children}
    </TableSortLabelMUI>
  )
}
