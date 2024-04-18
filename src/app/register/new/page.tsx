'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const options = [
  { value: 'fiction', text: 'Fiction' },
  { value: 'non-fiction', text: 'Non-fiction' },
  { value: 'educational', text: 'Educational' },
  { value: 'biography', text: 'Biography' },
]

const RegisterBook = () => {
  const router = useRouter()
  const [bookData, setBookData] = useState({
    thumbnail: '',
    title: '',
    description: '',
    category: '',
    storageLocation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBookData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Book Data:', bookData)
    // Here you would typically handle the submission to the backend
    router.push('/')
  }

  return (
    <div className='mx-auto max-w-md p-4'>
      <h1 className='mb-4 text-center text-xl font-bold'>Register New Book</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input
          name='thumbnail'
          type='file'
          placeholder='画像を選択して下さい'
          value={bookData.thumbnail}
          onChange={handleChange}
        />
        <Input
          name='title'
          type='text'
          placeholder='Title'
          value={bookData.title}
          onChange={handleChange}
        />
        <Input
          name='description'
          type='text'
          placeholder='Description'
          value={bookData.description}
          onChange={handleChange}
        />

        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='カテゴリ' />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className='font-medium'>貸出場所</p>
        <ul className='flex gap-2'>
          {['不定', '関内', 'SSS'].map((location) => (
            <li
              key={location}
              className={`inline-block rounded-md px-4 py-1 text-xs font-medium ${bookData.storageLocation === location ? 'bg-green-200' : 'bg-slate-100'}`}
              onClick={() => setBookData({ ...bookData, storageLocation: location })}
            >
              {location}
            </li>
          ))}
        </ul>
        <Button type='submit' className='w-full'>
          本を登録する
        </Button>
      </form>
    </div>
  )
}

export default RegisterBook
