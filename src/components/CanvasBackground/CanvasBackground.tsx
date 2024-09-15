import {
  Canvas,
  ThreeEvent,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { Group, Mesh, RepeatWrapping, TextureLoader } from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Bear = (props: { position: [number, number, number] }) => {
  const bearRef = useRef<Group>(null);
  // const [prevTime, setPrevTime] = useState(0);
  const [initialTime, setInitialTime] = useState(0);

  useFrame(({ clock }) => {
    if (initialTime === 0) setInitialTime(clock.getElapsedTime());

    const currentTime = clock.getElapsedTime();
    // setPrevTime(currentTime);

    if (bearRef.current) {
      const angle = currentTime + initialTime;

      bearRef.current.position.y = Math.sin(angle) * 0.25 + 0.25;
    }
  });

  const { nodes, materials } = useGLTF("./models/Bear.glb");

  const [angle] = useState(Math.random() * Math.PI * 2);

  const scale = 0.01;

  return (
    <group
      ref={bearRef}
      {...props}
      scale={[scale, scale, scale]}
      rotation={[0, angle, 0]}
      dispose={null}
    >
      <mesh
        geometry={(nodes["Cube037_Cube036"] as Mesh).geometry}
        material={materials["795548"]}
      />
      {/* Ears */}
      <mesh
        geometry={(nodes["Cube037_Cube036-Mesh"] as Mesh).geometry}
        material={materials["BA68C8"]}
      />
      {/* Eyes, Nose */}
      <mesh
        geometry={(nodes["Cube037_Cube036-Mesh_1"] as Mesh).geometry}
        material={materials["1A1A1A"]}
      />
      {/* Body */}
      <mesh
        geometry={(nodes["Cube037_Cube036-Mesh_2"] as Mesh).geometry}
        material={materials["795548"]}
      />
      {/* idk */}
      <mesh
        geometry={(nodes["Cube037_Cube036-Mesh_3"] as Mesh).geometry}
        material={materials["795548"]}
      />
    </group>
  );
};

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

const SceneControl = () => {
  const { camera } = useThree();

  camera.rotation.x = -Math.PI / 4;

  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    const normalizedY = scrollY / window.innerHeight;
    camera.position.z = 75 * normalizedY;
  }, [camera, camera.position, scrollY]);

  return <></>;
};

const CanvasBackground = () => {
  return (
    <div className="fixed w-screen h-screen bg-js-white cursor-crosshair">
      <Canvas camera={{ position: [0, 10, 4] }}>
        <SceneControl />
        <Floor />
        <ambientLight intensity={3} />
        <directionalLight position={[1, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
