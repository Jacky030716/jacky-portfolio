import * as THREE from "three";
import { Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface CircleProps {
  position: number[];
  rotation?: [number, number, number];
  color: string;
  radius: number;
  label: string;
  expanded: boolean;
  delay?: number;
}

export const TechNode = ({
  position,
  color,
  radius,
  label,
  expanded,
  rotation,
}: CircleProps) => {
  const circleRef = useRef<THREE.Group>(null);
  const initialPos = [0, 0, 0];

  useFrame(() => {
    if (circleRef.current && expanded) {
      // Animate from center to final position
      const targetPos = new THREE.Vector3(...position);
      const currentPos = circleRef.current.position;
      currentPos.lerp(targetPos, 0.05);
    }
  });

  return (
    <group
      ref={circleRef}
      position={initialPos as [number, number, number]}
      rotation={rotation || ([0, 0, 0] as [number, number, number])}
    >
      <mesh>
        <circleGeometry args={[radius, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Text
        position={[0, 0, 0.1]}
        fontSize={radius * 0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};
