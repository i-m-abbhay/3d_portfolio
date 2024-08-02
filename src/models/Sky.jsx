import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";

export default function Sky() {
  const sky = useGLTF(skyScene);

  return (
    <group>
      <mesh>
        <primitive object={sky.scene} />
      </mesh>
    </group>
  );
}
