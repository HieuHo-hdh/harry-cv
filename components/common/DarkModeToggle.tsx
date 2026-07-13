'use client'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme()
  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <Button variant="default" size="icon" className={`cursor-pointer ${className ?? ''}`} onClick={handleToggleTheme}>
      <Sun className="scale-100 dark:scale-0" />
      <Moon className="absolute scale-0 dark:scale-100" />
    </Button>
  )
}

export default DarkModeToggle