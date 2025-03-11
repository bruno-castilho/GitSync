import { Avatar, Box, Button, Typography } from '@mui/material'

export function UserContent() {
  return (
    <Box sx={{ minWidth: { xs: '100%', sm: 300 } }}>
      <Box sx={{ display: { xs: 'flex', sm: 'block' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="Bruno Castilho"
            src="https://avatars.githubusercontent.com/u/59142847?v=4"
            sx={{
              height: { xs: 96, sm: 192 },
              width: { xs: 96, sm: 192 },
            }}
          />
        </Box>
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
          <strong>Bruno da Silva Castilho</strong>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            bruno-castilho
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Full Stack Developer
          </Typography>

          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <strong>6</strong> followers · <strong>13</strong> following
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button size="small" variant="contained" fullWidth>
        Exportar Repositórios
      </Button>
    </Box>
  )
}
