'use client'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <Button variant="default" size="icon" className="cursor-pointer" onClick={handleToggleTheme}>
      {theme === 'white' ? <Sun /> : <Moon />}
    </Button>
  )
}

export default DarkModeToggle