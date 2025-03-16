import { PageContainer, SearchBarContainer } from './style'
import { SearchBar } from '@/components/SearchBar'
import { UserListLoading } from './components/UserListLoading'

export default async function Loading() {
  return (
    <PageContainer>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <UserListLoading />
    </PageContainer>
  )
}
