"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export function Cube() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(({ mouse }) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    
    // Mouse interaction
    meshRef.current.rotation.x += (mouse.y * 0.1 - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (mouse.x * 0.1 - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.7}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
}