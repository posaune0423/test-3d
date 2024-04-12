import ThreeDFBXViewer from '@/components/ThreeDFBXViewer'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] w-full'>
      <div className='w-full h-[500px]'>
        <ThreeDFBXViewer fbxFile='/sphere.fbx' />
      </div>
    </main>
  )
}

export default Home
