import ThreeDFBXViewer from '@/components/ThreeDFBXViewer'

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-70px)] w-full'>
      <div className='w-full h-full'>
        <ThreeDFBXViewer fbxFile='/sphere.fbx' />
      </div>
    </main>
  )
}
