import Image from 'next/image'

const BookDetail = () => {
  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <Image src='/path/to/book/image.jpg' alt='Book Image' width={150} height={300} />
      <p>Location: Library Shelf A</p>
      <p>Description: This book covers the fundamentals of modern architecture.</p>
      <button>View More</button>
    </main>
  )
}

export default BookDetail
