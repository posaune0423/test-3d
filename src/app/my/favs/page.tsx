import { ArrowLeft } from 'lucide-react'
import BookList from '@/app/_components/BoolkList'
import MotionLink from '@/components/MotionLink'

const FavsPage = () => {
  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <div className='pl-3 pt-3'>
        <MotionLink href='/my'>
          <ArrowLeft />
        </MotionLink>
      </div>
      <h2 className='text-center font-bold'>欲しい本リスト</h2>
      <BookList />
    </main>
  )
}

export default FavsPage
