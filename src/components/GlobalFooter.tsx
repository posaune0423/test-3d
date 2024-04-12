import { Home, UserRound, History } from 'lucide-react'
import Link from 'next/link'

const GlobalFooter = () => {
  return (
    <footer className='flex max-h-[80px] items-center justify-between px-4 pb-3'>
      <Link
        href='/'
        className='flex flex-col items-center justify-center font-medium hover:opacity-50'
      >
        <Home size={30} />
        Home
      </Link>
      <Link
        href='/history'
        className='flex flex-col items-center justify-center font-medium hover:opacity-50'
      >
        <History size={30} />
        History
      </Link>
      <Link
        href='/profile'
        className='flex flex-col items-center justify-center font-medium hover:opacity-50'
      >
        <UserRound size={30} />
        Profile
      </Link>
    </footer>
  )
}

export default GlobalFooter
