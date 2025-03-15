import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { IconType } from "react-icons";
import { Html, Text } from "@react-three/drei";

interface TechItemProps {
  item: {
    name: string;
    icon: IconType;
    color: string;
    position: number[];
  };
  expanded: boolean;
  delay: number;
}

export const TechItem = ({ item, expanded }: TechItemProps) => {
  const itemRef = useRef<THREE.Group>(null);
  const initialPos = [0, 0, 0];

  useFrame(() => {
    if (itemRef.current && expanded) {
      // Animate from center to final position with delay
      const targetPos = new THREE.Vector3(...item.position);
      const currentPos = itemRef.current.position;
      currentPos.lerp(targetPos, 0.03);
    }
  });

  return (
    <group
      ref={itemRef}
      position={initialPos as [number, number, number]}
      castShadow
    >
      {/* Add a sphere for a 3D effect */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color={item.color} transparent opacity={0.9} />
      </mesh>

      {/* Add the icon using Html */}
      <Html position={[0, 0, 0]} center>
        <item.icon size={24} color="white" />
      </Html>

      {/* Add the name below the sphere */}
      <Text
        position={[0, -0.8, 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {item.name}
      </Text>

      <pointLight position={[0, 2, 2]} intensity={1} castShadow />
    </group>
  );
};
