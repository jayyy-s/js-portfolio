import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Floor from "./Floor";

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
    camera.position.z = 25 * normalizedY;
  }, [camera, camera.position, scrollY]);

  return <></>;
};

const CanvasBackground = () => {
  return (
    <div className="fixed w-full h-full bg-js-white cursor-crosshair">
      <Canvas camera={{ position: [0, 20, 0], far: 100, fov: 25 }}>
        <SceneControl />
        <Floor />
        <ambientLight intensity={2.5} />
        <directionalLight position={[1, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
