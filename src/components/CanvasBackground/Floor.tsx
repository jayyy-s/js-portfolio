import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { RepeatWrapping, TextureLoader } from "three";
import Bear from "./Bear";

const Floor = () => {
  const [positions, setPositions] = useState<[number, number, number][]>([]);

  const floorTextures = useLoader(TextureLoader, [
    "./vehicle-interior1-bl/vehicle-interior1-ao.webp",
    "./vehicle-interior1-bl/vehicle-interior1-normal-ogl.webp",
    "./vehicle-interior1-bl/vehicle-interior1-roughness.webp",
    "./vehicle-interior1-bl/vehicle-interior1-albedo.webp",
  ]);

  floorTextures.forEach((texture) => {
    texture.repeat.set(16, 16);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });

  const [floorAo, floorNormal, floorRoughness, floorColor] = floorTextures;

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const { point } = event.intersections[0];
    setPositions([...positions, [point.x, point.y, point.z]]);
  };

  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleClick}
        position={[0, 0, 50]}
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial
          aoMap={floorAo}
          normalMap={floorNormal}
          roughnessMap={floorRoughness}
          map={floorColor}
        />
      </mesh>
      {positions.map((position) => (
        <Bear position={position} />
      ))}
    </group>
  );
};

export default Floor;
