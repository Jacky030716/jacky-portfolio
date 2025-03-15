import React from "react";
import { categories } from "@/constants";
import { TechNode } from "./TechNode";
import { OrbitalRings } from "./OrbitalRings";
import { TechItem } from "./TechItem";
import { Text } from "@react-three/drei";
import { useScreenSize } from "@/hooks/useScreenSize";

interface TechStackSceneProps {
  expanded: boolean;
}

export const TechStackScene = ({ expanded }: TechStackSceneProps) => {
  const screenSize = useScreenSize();

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  return (
    <group>
      <TechNode
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        color="#9333ea"
        radius={isMobile ? 0.5 : isTablet ? 1 : 1.25}
        label=""
        expanded={true}
      />

      {/* Orbital rings */}
      <OrbitalRings />

      {categories.map((category, i) => {
        const textPosition = category.position[screenSize];

        return (
          <React.Fragment key={i}>
            <group>
              <Text
                position={
                  expanded
                    ? (textPosition as [number, number, number])
                    : [0, 0, 0]
                }
                fontSize={isMobile ? 0.4 : isTablet ? 0.6 : 0.7}
                fontStyle="italic"
                fontWeight="bold"
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {category.name}
              </Text>
            </group>

            {category.items.map((item, j) => (
              <TechItem
                key={j}
                item={item}
                expanded={expanded}
                delay={0.8 + j * 0.1}
              />
            ))}
          </React.Fragment>
        );
      })}
    </group>
  );
};
