import { SearchBar } from '@/components/SearchBar'
import { Box, Divider } from '@mui/material'
import { UserContent } from './components/UserContent'
import { RepositoryContent } from './components/RepositoryContent'

export default function Page() {
  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex' },
          width: '100%',
          mt: 2,
          gap: 2,
        }}
      >
        <UserContent />

        <Box sx={{ width: '100%', mt: { xs: 2, sm: 0 } }}>
          <Divider />
          {new Array(10).fill(null).map((_, index) => (
            <div key={index}>
              <RepositoryContent />
              <Divider />
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
