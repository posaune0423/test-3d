'use client'

import { OrbitControls, useFBX } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

interface ThreeDFBXViewerProps {
  fbxFile: string
}

const FBXModel = ({ file }: { file: string }) => {
  const fbx = useFBX(file)
  useFrame((state, delta) => {
    fbx.rotation.y += delta * 0.5 // Adjust rotation speed by changing 0.5
  })
  return <primitive object={fbx} scale={0.02} />
}

const ThreeDFBXViewer: React.FC<ThreeDFBXViewerProps> = ({ fbxFile }) => {
  return (
    <div className='size-full'>
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
