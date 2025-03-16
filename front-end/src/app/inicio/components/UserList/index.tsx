'use client'
import { UserGitHub } from '@/types/UserGitHub'
import { UserContent } from '../UserContent'
import { UserListContainer } from './styles'
import { Pagination } from '@/components/Pagination'

interface UserListProps {
  users: UserGitHub[]
  totalCount: number
}

export function UserList({ users, totalCount }: UserListProps) {
  return (
    <UserListContainer>
      {users.map((user) => (
        <UserContent key={user.id} user={user} />
      ))}
      <Pagination totalCount={totalCount} />
    </UserListContainer>
  )
}
