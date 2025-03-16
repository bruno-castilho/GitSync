import { FormControlLabel, useColorScheme } from '@mui/material'
import { MaterialUISwitch } from './styles'

export function ThemeSwitch() {
  const { mode, systemMode, setMode } = useColorScheme()

  function handleChange() {
    setMode(mode === 'dark' || systemMode === 'dark' ? 'light' : 'dark')
  }

  const isChecked = mode === 'light' || systemMode === 'light'
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} checked={isChecked} />}
      onChange={handleChange}
      label={
        mode === 'dark' || systemMode === 'dark' ? 'Dark Mode' : 'Light Mode'
      }
    />
  )
}
