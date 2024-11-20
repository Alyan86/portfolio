'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Model } from './model';

export function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <spotLight position={[-10, 10, 5]} intensity={0.8} />
          <Model />
        </Canvas>
      </div>

      <div className="relative z-10 text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
        >
          Alyan Siddiqui
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-muted-foreground mb-8"
        >
          Professional 3D Rendering Services
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
