import ThreeDFBXViewer from '@/components/ThreeDFBXViewer'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] w-full'>
      <div className='h-[500px] w-full'>
        <ThreeDFBXViewer fbxFile='/sphere.fbx' />
      </div>
    </main>
  )
}

export default Home
