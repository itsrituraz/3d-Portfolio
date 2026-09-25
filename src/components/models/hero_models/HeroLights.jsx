import { useMemo } from "react";
import * as THREE from "three";

const HeroLights = () => {
  // Memoize RectAreaLight so it is created once, not on every render
  const rectAreaLight = useMemo(() => {
    const light = new THREE.RectAreaLight("#a259ff", 8, 3, 2);
    return light;
  }, []);

  return (
    <>
      {/* lamp spotlight */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
        castShadow={false}
      />
      {/* bluish overhead lamp */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={40}
        color="#4cc9f0"
        castShadow={false}
      />
      {/* purplish side fill */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#9d4edd"
        castShadow={false}
      />
      {/* memoized area light for soft moody fill */}
      <primitive
        object={rectAreaLight}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      {/* subtle point lights for atmospheric tone */}
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
