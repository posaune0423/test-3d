import MotionLink from '@/components/MotionLink'
import { Button } from '@/components/ui/button'

const History = () => {
  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <section className='p-4'>
        <h1 className='mb-4 text-center text-xl font-bold'>本を登録する</h1>
        <div className='mx-auto mb-4 rounded-md bg-slate-100 p-4 text-center font-medium'>
          <p>
            <span className='font-bold text-red-500'>1</span>
            冊登録する事で、{' '}
          </p>
          <p>
            <span className='font-bold text-red-500'>1</span>冊借りれる！
          </p>
          <p>知識を共有しましょう〜</p>
        </div>
        <Button className='w-full'>
          <MotionLink href='/register/new'>
            本を登録する
          </MotionLink>
        </Button>
      </section>
    </main>
  )
}

export default History
