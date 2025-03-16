import { AlertContext } from '@/contexts/AlertContext'
import { Alert, Snackbar } from '@mui/material'
import { useContext } from 'react'

export function AlertComponent() {
  const { open, severity, onClose, message } = useContext(AlertContext)

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      transitionDuration={{ enter: 500, exit: 250 }}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
