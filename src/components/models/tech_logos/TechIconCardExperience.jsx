import { Environment, Float, OrbitControls, PerspectiveCamera, useGLTF, View } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model, trackRef }) => {
  const gltf = useGLTF(model.modelPath);
  const clonedScene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  const [domElement, setDomElement] = useState(
    () => trackRef?.current?.closest(".tech-card") || trackRef?.current || null
  );

  useEffect(() => {
    if (!domElement) {
      const el = trackRef?.current?.closest(".tech-card") || trackRef?.current;
      if (el) {
        setDomElement(el);
      } else {
        const interval = setInterval(() => {
          const target = trackRef?.current?.closest(".tech-card") || trackRef?.current;
          if (target) {
            setDomElement(target);
            clearInterval(interval);
          }
        }, 50);
        return () => clearInterval(interval);
      }
    }
  }, [trackRef, domElement]);

  useEffect(() => {
    if (
      model.name === "Interactive Developer" ||
      model.name.includes("Three") ||
      model.modelPath.includes("three")
    ) {
      clonedScene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [clonedScene, model.name, model.modelPath]);

  return (
    <View track={trackRef}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow={false}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={clonedScene} />
        </group>
      </Float>

      {domElement && (
        <OrbitControls
          enableZoom={false}
          domElement={domElement}
          makeDefault={false}
        />
      )}
    </View>
  );
};

export default TechIconCardExperience;
