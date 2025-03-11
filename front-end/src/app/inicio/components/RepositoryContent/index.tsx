import { StarBorderRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

export function RepositoryContent() {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary">
        <strong>desafio-neo-credito</strong>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            g: 2,
          }}
        >
          <StarBorderRounded color="primary" />
          <Typography variant="body2">
            <strong>Stars</strong> 40
          </Typography>
        </Box>
      </Box>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Updated 1 hour ago</Typography>
    </Box>
  )
}
