import BookList from './_components/BoolkList'
import SearchBox from './_components/SearchBox'

const Home = () => {
  return (
    <main className='mx-auto mb-[90px] min-h-[calc(100vh-90px)] w-full max-w-md'>
      <SearchBox />
      <BookList />
    </main>
  )
}

export default Home
