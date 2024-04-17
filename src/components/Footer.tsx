import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full p-4 text-center'>
      <Link href='/lp'>
        <Image src='/images/logo.png' width={80} height={32} alt='Logo Image' className='mx-auto mb-2' />
      </Link>
      <p className='text-xs font-light leading-5'>
        <Link href='/lp/privacy' className='underline'>
          Privacy Policy
        </Link>{' '}
        &{' '}
        <Link href='/lp/terms' className='underline'>
          Terms of Service
        </Link>
      </p>
    </footer>
  )
}

export default Footer
