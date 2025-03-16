'use client'
import { Pagination } from '@/components/Pagination'
import { UserListContainer } from '../UserList/styles'
import { UserContentSkeleton } from '../UserContentSkeleton'

export function UserListLoading() {
  return (
    <UserListContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <UserContentSkeleton key={index} />
      ))}
      <Pagination totalCount={0} />
    </UserListContainer>
  )
}
