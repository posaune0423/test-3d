import ThreeDFBXViewer from '@/components/ThreeDFBXViewer'

const Home = () => {
  return (
    <main className='mx-auto min-h-[calc(100vh-90px)] w-full max-w-md'>
      <div className='h-[500px] w-full'>
        <ThreeDFBXViewer fbxFile='/sphere.fbx' />
      </div>
    </main>
  )
}

export default Home
