export type Book = {
  id: number
  title: string
  author: string
  thumbnail: string
}

export const books: Book[] = [
  {
    id: 1,
    title: '教養としての認知科学',
    author: 'George Orwell',
    thumbnail: '/images/books/book1.jpg',
  },
  {
    id: 2,
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    thumbnail: '/images/books/book1.jpg',
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    thumbnail: '/images/books/book1.jpg',
  },
  {
    id: 4,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    thumbnail: '/images/books/book2.jpg',
  },
  {
    id: 5,
    title: '1984',
    author: 'George Orwell',
    thumbnail: '/images/books/book2.jpg',
  },
  {
    id: 6,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    thumbnail: '/images/books/book2.jpg',
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    thumbnail: '/images/books/book2.jpg',
  },
]
