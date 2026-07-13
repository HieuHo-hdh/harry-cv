'use client'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

const   ScrollTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
  return (
    <Button variant='default' size='icon' className='cursor-pointer' aria-label="Scroll to top" onClick={handleScrollToTop}>
      <ArrowUp />
    </Button>
  )
}

export default ScrollTopButton