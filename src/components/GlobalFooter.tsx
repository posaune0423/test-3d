import { Home, UserRound, History } from 'lucide-react'
import Link from 'next/link'

const GlobalFooter = () => {
  return (
    <footer className='p-2 flex justify-between items-center h-[70px]'>
      <Link href='/'>
        <Home size={54} className='p-2' />
      </Link>
      <Link href='/history'>
        <History size={54} className='p-2' />
      </Link>
      <Link href='/profile'>
        <UserRound size={54} className='p-2' />
      </Link>
    </footer>
  )
}

export default GlobalFooter
