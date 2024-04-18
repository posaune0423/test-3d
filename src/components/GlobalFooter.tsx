import { Home, UserRound, Book } from 'lucide-react'
import MotionLink from './MotionLink'

const GlobalFooter = () => {
  return (
    <footer className='fixed inset-x-0 bottom-0 mx-auto max-h-[90px] w-full max-w-md bg-white px-5 pb-8 pt-4'>
      <div className='flex items-center justify-between'>
        <MotionLink
          href='/'
          className='flex flex-col items-center justify-center text-xs opacity-50 hover:opacity-100'
        >
          <Home size={24} className='mb-1' />
          ホーム
        </MotionLink>
        <MotionLink
          href='/history'
          className='flex flex-col items-center justify-center text-xs font-medium opacity-50 hover:opacity-100'
        >
          <Book size={24} className='mb-1' />
          貸す
        </MotionLink>
        <MotionLink
          href='/profile'
          className='flex flex-col items-center justify-center text-xs font-medium opacity-50 hover:opacity-100'
        >
          <UserRound size={24} className='mb-1' />
          マイページ
        </MotionLink>
      </div>
    </footer>
  )
}

export default GlobalFooter
