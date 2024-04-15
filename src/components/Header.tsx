import Link from 'next/link'
import InstallButton from '@/app/lp/_components/InstallButton'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-3'>
      <Link href='/lp'>
        <h1 className='text-xl font-bold'>Sample</h1>
      </Link>
      <InstallButton />
    </header>
  )
}

export default Header
