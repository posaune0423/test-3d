import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import BorrowButton from './_components/BorrowButton'
import MotionLink from '@/components/MotionLink'
import { type Review, books, reviews } from '@/constants/mock'

const ReviewCard = ({ review }: { review: Review }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  return (
    <div className='mb-4 rounded-lg bg-white p-4 shadow'>
      <div className='flex items-center space-x-4'>
        <div className='size-[50px] shrink-0'>
          <Image
            src={review.reviewer.thumbnail}
            alt='Reviewer Image'
            width={50}
            height={50}
            className='size-[50px] rounded-full object-cover'
          />
        </div>
        <div className='grow'>
          <h3 className='font-bold'>{review.reviewer.name}</h3>
          <div className='flex items-center'>{renderStars(review.rating)}</div>
          <p className='text-sm text-gray-600'>{review.content}</p>
        </div>
      </div>
    </div>
  )
}

const BookDetail = ({ params }: { params: { id: number } }) => {
  const book = books[params.id]

  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <div className='pl-3 pt-3'>
        <MotionLink href='/'>
          <ArrowLeft />
        </MotionLink>
      </div>
      <section className='p-3'>
        <Image src={book.thumbnail} alt='Book Image' width={150} height={300} className='mx-auto' />
        <div className='flex justify-center py-4'>
          <BorrowButton />
        </div>
        <div className='mb-4'>
          <h1 className='text-center text-lg font-bold'>{book.title}</h1>
          <p className='text-center font-medium'>{book.author}</p>
        </div>
        <div className='mb-4'>
          <h2 className='mb-2 font-bold'>貸出場所</h2>
          <ul className='flex gap-2'>
            <li className='inline-block rounded-lg bg-slate-300 px-4 py-1 text-xs'>関内</li>
            <li className='inline-block rounded-lg bg-slate-300 px-4 py-1 text-xs'>SSS</li>
          </ul>
        </div>
        <div className='mb-4'>
          <h2 className='mb-2 font-bold'>本の説明</h2>
          <p>{book.description}</p>
        </div>
        <div className='mb-4'>
          <h2 className='mb-2 font-bold'>借りた人のレビュー</h2>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default BookDetail
