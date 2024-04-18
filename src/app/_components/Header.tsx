import { Bell, ChevronRight } from 'lucide-react'
import SearchBox from './SearchBox'
import MotionLink from '@/components/MotionLink'

const Header = ({
  isSearching,
  toggleSearching,
}: {
  isSearching: boolean
  toggleSearching: () => void
}) => {
  return (
    <header className='flex items-center gap-2 px-4'>
      {isSearching && <ChevronRight onClick={toggleSearching} />}
      <SearchBox toggleSearching={toggleSearching} />
      {isSearching || (
        <MotionLink className='relative' href='/notification'>
          <Bell />
          <span className='absolute right-0 top-0 size-2 items-center rounded-full bg-red-500 p-1' />
        </MotionLink>
      )}
    </header>
  )
}

export default Header
