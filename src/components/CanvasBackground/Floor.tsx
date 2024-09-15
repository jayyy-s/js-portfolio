import { ThreeEvent, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { RepeatWrapping, TextureLoader } from "three";
import Bear from "./Bear";

const Floor = () => {
  const [positions, setPositions] = useState<[number, number, number][]>([]);

  const floorTextures = useLoader(TextureLoader, [
    "./vehicle-interior1-bl/vehicle-interior1-ao.png",
    "./vehicle-interior1-bl/vehicle-interior1-normal-ogl.png",
    "./vehicle-interior1-bl/vehicle-interior1-roughness.png",
    "./vehicle-interior1-bl/vehicle-interior1-albedo.png",
  ]);

  floorTextures.forEach((texture) => {
    texture.repeat.set(8, 8);
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
      <mesh rotation={[-Math.PI / 2, 0, 0]} onClick={handleClick}>
        <planeGeometry args={[200, 200, 10, 10]} />
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
