'use client'
import { uploadRepositories } from '@/api/back-end/uploadRepositories'
import { NotificationsSSEContext } from '@/contexts/NotificationsSSEContext'
import { SearchBar } from '@/components/SearchBar'
import { CardMembershipSharp, UploadSharp } from '@mui/icons-material'
import { Button, Typography, useMediaQuery } from '@mui/material'
import { ChangeEvent, useContext } from 'react'
import {
  HeaderActions,
  HeaderAvatar,
  HeaderContainer,
  HeaderDescription,
  SearchBarContainer,
  UploadInput,
} from './styles'
import { AlertContext } from '@/contexts/AlertContext'
import axios from 'axios'

export function Header() {
  const isMobile = useMediaQuery('(max-width:600px)')
  const { success, error } = useContext(AlertContext)

  const { getNotificationConnectionID } = useContext(NotificationsSSEContext)
  async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    try {
      const notificationConnectionID = getNotificationConnectionID()
      const file = event.target.files?.[0]

      if (!file) return

      const formData = new FormData()
      formData.append('notificationConnectionID', notificationConnectionID)
      formData.append('file', file)

      const response = await uploadRepositories({ formData })

      success(response.msg)
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.data.msg)
        return error(e.response.data.msg)

      error('Algo não ocorreu bem')
      console.error(e)
    }
  }

  return (
    <>
      <HeaderContainer component="header">
        <HeaderDescription>
          <HeaderAvatar>
            <CardMembershipSharp />
          </HeaderAvatar>

          <Typography variant="h6">Repositórios</Typography>
        </HeaderDescription>
        <HeaderActions>
          {!isMobile && <SearchBar />}

          <Button
            component="label"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<UploadSharp />}
          >
            importar
            <UploadInput
              type="file"
              inputProps={{ accept: '.csv', multiple: false }}
              onChange={handleFileUpload}
            />
          </Button>
        </HeaderActions>
      </HeaderContainer>
      {isMobile && (
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      )}
    </>
  )
}
