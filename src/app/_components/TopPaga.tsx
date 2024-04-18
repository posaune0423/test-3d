'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import BookList from './BoolkList'
import Header from './Header'

const categoryList = ['ビジネス', 'バックエンド', 'フロントエンド']
const ownerList = ['田中', '山田']
const officeList = ['関内', 'SSS']

const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  const clearSearchHistory = () => {
    localStorage.setItem('searchHistory', '[]')
    setSearchHistory([])
  }
  const storageChange = (storageEvent: StorageEvent) => {
    console.log('storage change')
    if (storageEvent.key === 'searchHistory') {
      setSearchHistory(JSON.parse(storageEvent.newValue || '[]'))
    }
  }

  useEffect(() => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')
    setSearchHistory(searchHistory)

    window.addEventListener('storage', (e) => storageChange(e))

    return () => {
      window.removeEventListener('storage', (e) => storageChange(e))
    }
  }, [])

  return (
    <div>
      <div className='flex justify-between'>
        <p>検索履歴</p>
        <p className='cursor-pointer text-xs text-blue-500' onClick={clearSearchHistory}>
          クリア
        </p>
      </div>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const SearchRow = ({ children, array }: { children: React.ReactNode; array: string[] }) => {
  const [isCollapse, setIsCollapse] = useState(false)
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <div className='mb-6'>
      <p className='flex'>
        {children}
        <ChevronRight
          onClick={toggleCollapse}
          className={`transition-transform duration-100 ${isCollapse ? 'rotate-90' : 'rotate-0'}`}
        />
      </p>
      {isCollapse && (
        <ul>
          <li>
            {array.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </li>
        </ul>
      )}
    </div>
  )
}

const SearchPanel = () => {
  return (
    <div className='p-4'>
      <SearchRow array={categoryList}>カテゴリーから探す</SearchRow>
      <SearchRow array={ownerList}>所有者から探す</SearchRow>
      <SearchRow array={officeList}>オフィスから探す</SearchRow>
      <SearchHistory />
    </div>
  )
}

const TopPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  const toggleSearching = () => {
    setIsSearching(!isSearching)
  }

  return (
    <section>
      <Header isSearching={isSearching} toggleSearching={toggleSearching} />
      {isSearching ? (
        <SearchPanel />
      ) : (
        <>
          <h2 className='mb-4 px-2 text-lg font-bold'>おすすめの本</h2>
          <BookList />
        </>
      )}
    </section>
  )
}

export default TopPage
