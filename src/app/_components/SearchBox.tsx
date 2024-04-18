'use client'

import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBox = ({
  toggleSearching,
  onFocus,
  onBlur,
  className,
}: {
  className?: string
  toggleSearching: () => void
  onFocus?: () => void
  onBlur?: () => void
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Search Term:', searchTerm)
    const searchHistory: string[] = JSON.parse(localStorage.getItem('searchHistory') || '[]')
    localStorage.setItem('searchHistory', JSON.stringify([...searchHistory, searchTerm]))
    toggleSearching()
  }

  return (
    <div
      className={`flex-auto bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}
    >
      <form onSubmit={handleSubmit}>
        <div className='relative'>
          <input
            className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='どんな本をお探しですか？'
            type='search'
            onChange={handleSearchChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={toggleSearching}
          />
          <button className='absolute right-2 top-2.5 flex size-4 items-center text-muted-foreground'>
            <Search />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
