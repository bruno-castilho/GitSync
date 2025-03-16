'use client'
import {
  KeyboardArrowLeftSharp,
  KeyboardArrowRightSharp,
} from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  totalCount: number
}

export function Pagination({ totalCount }: PaginationProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = parseInt(searchParams.get('page') || '1')

  const isFirstPage = page === 1
  const isLastPage = (page - 1) * 10 + 10 >= totalCount

  function handleNextPage() {
    if (isLastPage) return
    const params = new URLSearchParams(window.location.search)
    params.set('page', (page + 1).toString())
    router.push(`?${params.toString()}`)
  }

  function handlePreviousPage() {
    if (isFirstPage) return
    const params = new URLSearchParams(window.location.search)
    params.set('page', (page - 1).toString())
    router.push(`?${params.toString()}`)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
    </Box>
  )
}
