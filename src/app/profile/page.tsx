import Image from 'next/image'
import { ProfileForm } from './ProfileForm'

const Profile = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] w-full grow'>
      <section className='p-4'>
        <h1 className='mb-4 text-3xl font-bold'>Profile</h1>
        <Image
          src='/images/profile.jpg'
          alt='user image'
          width={100}
          height={100}
          className='mx-auto size-[100px] rounded-full object-cover'
        />
        <ProfileForm />
      </section>
    </main>
  )
}

export default Profile
