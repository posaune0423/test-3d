import { Bell, ChevronRight } from 'lucide-react'
import SearchBox from './SearchBox'

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
      {isSearching || <Bell />}
    </header>
  )
}

export default Header
