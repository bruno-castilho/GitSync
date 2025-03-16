'use client'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const query = searchParams.get('query') ?? ''

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    values: {
      query
    }
  })

  function handleSearch(data: SearchFormInputs) {
    const params = new URLSearchParams(window.location.search)
    params.set('query', data.query)
    router.push(`?${params.toString()}`)
  }

  return (
    <Search onSubmit={handleSubmit(handleSearch)}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Buscar..."
        inputProps={{ 'aria-label': 'search' }}
        {...register('query')}
      />
    </Search>
  )
}
