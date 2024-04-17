import Image from 'next/image'
import Link from 'next/link'
import InstallButton from '@/app/lp/_components/InstallButton'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-3'>
      <Link href='/lp'>
        <Image src='/images/logo.png' width={80} height={32} alt='Logo Image' />
      </Link>
      <InstallButton />
    </header>
  )
}

export default Header
