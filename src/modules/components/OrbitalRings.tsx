import * as THREE from "three";
import { useRef } from "react";

export const OrbitalRings = () => {
  const ringsRef = useRef<THREE.Group>(null);

  const horizontalLinePoints = [
    new THREE.Vector3(-15, 0, 0), // Start point of the horizontal line
    new THREE.Vector3(15, 0, 0), // End point of the horizontal line
  ];

  const verticalLinePoints = [
    new THREE.Vector3(0, -8, 0), // Start point of the vertical line
    new THREE.Vector3(0, 8, 0), // End point of the vertical line
  ];

  return (
    <group ref={ringsRef} position={[0, 0, -0.5]}>
      {[2, 4, 6, 8].map((radius, i) => (
        <mesh
          key={i}
          rotation={[0, 0, 0]}
          scale={[1.8, 1, 1]} // Scale X-axis to make it elliptical
        >
          <ringGeometry args={[radius + i * 0.005, radius + 0.05, 64]} />
          <meshBasicMaterial
            color="#6366f1"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      {/* Horizontal Line */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            args={[
              new Float32Array(
                horizontalLinePoints.flatMap((p) => [p.x, p.y, p.z])
              ),
              3,
            ]}
            attach="attributes-position"
            count={horizontalLinePoints.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" opacity={0.2} transparent />
      </line>

      {/* Vertical Line */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            args={[
              new Float32Array(
                verticalLinePoints.flatMap((p) => [p.x, p.y, p.z])
              ),
              3,
            ]}
            attach="attributes-position"
            count={verticalLinePoints.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" opacity={0.2} transparent />
      </line>
    </group>
  );
};
