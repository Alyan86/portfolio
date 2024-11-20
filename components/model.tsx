'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Model() {
  const modelRef = useRef<THREE.Group>();

  // Replace '/path/to/your/model.glb' with the actual path to your model
  const { scene } = useGLTF('/a1.glb');

  useFrame(({ mouse }) => {
    if (!modelRef.current) return;

    // Smooth mouse follow
    modelRef.current.rotation.y +=
      (mouse.x * 0.5 - modelRef.current.rotation.y) * 0.1;
    modelRef.current.rotation.x +=
      (mouse.y * 0.3 - modelRef.current.rotation.x) * 0.1;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1} // Adjust scale as needed
      position={[0, 0, 0]} // Adjust position as needed
    />
  );
}

// Preload the model
useGLTF.preload('/model.glb');
