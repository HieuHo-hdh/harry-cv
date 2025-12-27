import ScrollTopButton from './ScrollTopButton'

const LayoutFooter = () => {
  return (
    <footer className='border-t bg-accent'>
      <div className='container mx-auto flex flex-row items-center justify-between max-h-max min-h-16 px-4'>
        <span className='text-md leading-[1.2]'>
          © {new Date().getFullYear()} Made by <span className='font-bold text-primary'>Harry</span> <br />
          <span className='text-xs'>{process.env.MAIL}</span> 
        </span>
        <ScrollTopButton />
      </div>
    </footer>
  )
}

export default LayoutFooter