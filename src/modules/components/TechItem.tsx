import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { IconType } from "react-icons";
import { Html, Text } from "@react-three/drei";
import { useScreenSize } from "@/hooks/useScreenSize";

interface TechItemProps {
  item: {
    name: string;
    icon: IconType;
    color: string;
    position: {
      desktop: number[];
      tablet: number[];
      mobile: number[];
    };
  };
  expanded: boolean;
  delay: number;
}

export const TechItem = ({ item, expanded }: TechItemProps) => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  const itemPostion = item.position[screenSize];
  const sphereSize = isMobile ? 0.4 : isTablet ? 0.5 : 0.6;

  const itemRef = useRef<THREE.Group>(null);
  const initialPos = [0, 0, 0];

  useFrame(() => {
    if (itemRef.current && expanded) {
      // Animate from center to final position with delay
      const targetPos = new THREE.Vector3(...itemPostion);
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
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshStandardMaterial color={item.color} transparent opacity={0.9} />
      </mesh>

      {/* Add the icon using Html */}
      <Html position={[0, 0, 0]} center>
        <item.icon size={isMobile ? 10 : isTablet ? 14 : 24} color="white" />
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
