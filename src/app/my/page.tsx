import { Heart, History, BookOpenText } from 'lucide-react'
import Image from 'next/image'
import MotionLink from '@/components/MotionLink'
import { users } from '@/constants/mock'

const Profile = () => {
  const user = users[0]

  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <section className='p-4'>
        <Image
          src='/images/user/user1.jpg'
          alt='user image'
          width={100}
          height={100}
          className='mx-auto mb-2 size-[100px] rounded-full object-cover'
        />
        <p className='mb-4 text-center text-sm font-bold'>{user.name}</p>
        <div className='flex justify-between'>
          <MotionLink
            href='/my/favs'
            className='w-[104px] rounded-lg border border-slate-900 px-2 py-3 text-center text-xs transition-colors hover:bg-slate-100'
          >
            <Heart className='mx-auto mb-2' size={28} />
            欲しい本リスト
          </MotionLink>
          <MotionLink
            href='/my/history'
            className='w-[104px] rounded-lg border border-slate-900 px-2 py-3 text-center text-xs transition-colors hover:bg-slate-100'
          >
            <History className='mx-auto mb-2' size={28} />
            読んだ本履歴
          </MotionLink>
          <MotionLink
            href='/my/shelf'
            className='w-[104px] rounded-lg border border-slate-900 px-2 py-3 text-center text-xs transition-colors hover:bg-slate-100'
          >
            <BookOpenText className='mx-auto mb-2' size={28} />
            本棚一覧
          </MotionLink>
        </div>
      </section>
    </main>
  )
}

export default Profile
