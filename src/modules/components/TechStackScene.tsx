import React from "react";
import { categories } from "@/constants";
import { TechNode } from "./TechNode";
import { OrbitalRings } from "./OrbitalRings";
import { TechItem } from "./TechItem";
import { Text } from "@react-three/drei";

interface TechStackSceneProps {
  expanded: boolean;
}

export const TechStackScene = ({ expanded }: TechStackSceneProps) => {
  return (
    <group>
      <TechNode
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        color="#9333ea"
        radius={1.25}
        label=""
        expanded={true}
      />

      {/* Orbital rings */}
      <OrbitalRings />

      {categories.map((category, i) => (
        <React.Fragment key={i}>
          <group>
            <Text
              position={
                expanded
                  ? [category.position[0], category.position[1] - 2, 0]
                  : [0, 0, 0]
              }
              fontSize={0.7}
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
      ))}
    </group>
  );
};
