import { Home, UserRound, History } from 'lucide-react'
import MotionLink from './MotionLink'

const GlobalFooter = () => {
  return (
    <footer className='fixed inset-x-0 bottom-0 mx-auto max-h-[90px] w-full max-w-md bg-white px-4 pb-8'>
      <div className='flex items-center justify-between'>
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
      </div>
    </footer>
  )
}

export default GlobalFooter
