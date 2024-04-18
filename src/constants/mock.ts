export type Book = {
  id: number
  title: string
  author: string
  thumbnail: string
  description: string
}

export type User = {
  id: number
  name: string
  thumbnail: string
}

export type Review = {
  id: number
  bookId: number
  rating: number
  content: string
  reviewer: User
}

export const books: Book[] = [
  {
    id: 1,
    title: '教養としての認知科学',
    author: 'George Orwell',
    thumbnail: '/images/books/book1.jpg',
    description: '認知科学の基本的な概念と理論を紹介します。',
  },
  {
    id: 2,
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    thumbnail: '/images/books/book1.jpg',
    description: 'ソフトウェア設計の原則と実践について解説します。',
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    thumbnail: '/images/books/book1.jpg',
    description: '1920年代のアメリカを舞台にした愛と欲望の物語。',
  },
  {
    id: 4,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    thumbnail: '/images/books/book2.jpg',
    description: '人種差別と不正義に立ち向かう少女の成長を描いた作品。',
  },
  {
    id: 5,
    title: '1984',
    author: 'George Orwell',
    thumbnail: '/images/books/book2.jpg',
    description: '全体主義社会の恐怖を描いたディストピア小説。',
  },
  {
    id: 6,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    thumbnail: '/images/books/book2.jpg',
    description: '技術が進歩した未来社会の問題を議論するディストピア作品。',
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    thumbnail: '/images/books/book2.jpg',
    description: '若者の孤独と反抗をリアルに描いた青春小説。',
  },
]

export const reviews: Review[] = [
  {
    id: 1,
    bookId: 1,
    content: '非常に興味深い内容で、認知科学の基本がよく理解できました。',
    rating: 5,
    reviewer: { id: 101, name: '山田太郎', thumbnail: '/images/profile.jpg' },
  },
  {
    id: 2,
    bookId: 2,
    content: 'クリーンアーキテクチャの概念がクリアに説明されており、参考になります。',
    rating: 4,
    reviewer: { id: 102, name: '佐藤花子', thumbnail: '/images/profile.jpg' },
  },
  {
    id: 3,
    bookId: 3,
    content: '1920年代のアメリカの雰囲気が色濃く表現されていて、引き込まれる作品です。',
    rating: 5,
    reviewer: { id: 103, name: '鈴木一郎', thumbnail: '/images/profile.jpg' },
  },
]
