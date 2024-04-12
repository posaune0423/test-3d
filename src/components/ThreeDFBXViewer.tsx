'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useFBX } from '@react-three/drei'

interface ThreeDFBXViewerProps {
  fbxFile: string
}

const FBXModel = ({ file }: { file: string }) => {
  const fbx = useFBX(file)
  return <primitive object={fbx} scale={0.02} />
}

const ThreeDFBXViewer: React.FC<ThreeDFBXViewerProps> = ({ fbxFile }) => {
  return (
    <div className='w-full h-full'>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FBXModel file={fbxFile} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeDFBXViewer
