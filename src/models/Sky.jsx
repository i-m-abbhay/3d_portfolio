import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sky({ isRotating }) {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.1 * delta;
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <group>
      <mesh ref={skyRef}>
        <primitive object={sky.scene} />
      </mesh>
    </group>
  );
}
