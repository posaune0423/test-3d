import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full p-4 text-center'>
      <h1 className='text-2xl font-bold'>Sample</h1>
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
