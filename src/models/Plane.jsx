import { useGLTF } from '@react-three/drei'
import React from 'react'
import PlaneScene from '../assets/3d/plane.glb'
const Plane = () => {

    const {scene,animation} =useGLTF(PlaneScene);
  return (
    <mesh >
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane