import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const StockChart3D = () => {
  return (
    <div className="w-full h-96">
      <Canvas>
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.5} />
        {/* Point light for focused illumination */}
        <pointLight position={[10, 10, 10]} />

        {/* Example 3D bar chart */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry args={[0.5, 2, 0.5]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 3, 0.5]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[1.5, 0, 0]}>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Orbit controls for user interaction */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default StockChart3D;