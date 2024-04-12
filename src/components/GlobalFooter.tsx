import { Home, UserRound, History } from 'lucide-react'
import MotionLink from './MotionLink'

const GlobalFooter = () => {
  return (
    <footer className='flex max-h-[80px] items-center justify-between px-4 pb-3'>
      <MotionLink
        href='/'
        className='flex flex-col items-center justify-center font-medium hover:opacity-50'
      >
        <Home size={30} />
        Home
      </MotionLink>
      <MotionLink
        href='/history'
        className='flex flex-col items-center justify-center font-medium hover:opacity-50'
      >
        <History size={30} />
        History
      </MotionLink>
      <MotionLink
        href='/profile'
        className='flex flex-col items-center justify-center font-medium hover:opacity-50'
      >
        <UserRound size={30} />
        Profile
      </MotionLink>
    </footer>
  )
}

export default GlobalFooter
