import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Mesh } from "three";

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

export default Bear;
