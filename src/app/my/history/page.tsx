import { ArrowLeft } from 'lucide-react'
import BookList from '@/app/_components/BoolkList'
import MotionLink from '@/components/MotionLink'

const HistoryPage = () => {
  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <div className='pl-3 pt-3'>
        <MotionLink href='/my'>
          <ArrowLeft />
        </MotionLink>
      </div>
      <h2 className='text-center font-bold'>読んだ本履歴</h2>
      <BookList />
    </main>
  )
}

export default HistoryPage
