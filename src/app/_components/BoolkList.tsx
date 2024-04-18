import Image from 'next/image'
import MotionLink from '@/components/MotionLink'
import { books, type Book } from '@/constants/mock'


const BookCard = ({ book }: { book: Book }) => {
  return (
    <li className='w-[100px]'>
      <MotionLink href={`/books/${book.id}`}>
        <Image src={book.thumbnail} width={100} height={400} alt={`Cover of ${book.title}`} />
      </MotionLink>
    </li>
  )
}

const BookList = () => {
  return (
    <section className='mx-auto px-2'>
      <h2 className='mb-4 text-lg font-bold'>おすすめの本</h2>
      <ul className='grid grid-cols-3 place-items-center justify-center gap-4'>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </section>
  )
}

export default BookList
