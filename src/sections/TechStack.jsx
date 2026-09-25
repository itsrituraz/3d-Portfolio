import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  const [mounted, setMounted] = useState(false);
  const trackRefs = useRef([]);

  // Dynamically provide a stable ref object per tech card
  const getTrackRef = (index) => {
    if (!trackRefs.current[index]) {
      trackRefs.current[index] = { current: null };
    }
    return trackRefs.current[index];
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub=" What I Bring to the Table "
        />

        {/* Cards grid - each card contains a tracking div that View follows */}
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon, index) => {
            const track = getTrackRef(index);

            return (
              <div
                key={techStackIcon.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  {/* This div is tracked by its corresponding <View> in the Canvas */}
                  <div
                    className="tech-icon-wrapper"
                    ref={(el) => {
                      track.current = el;
                    }}
                  />
                  <div className="padding-x w-full">
                    <p>{techStackIcon.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*
          SINGLE shared Canvas for ALL tech card Views.
          Each View has its own scissored viewport and independent OrbitControls.
          Drei's View component has built-in viewport culling and only renders when cards are visible on screen.
        */}
        {mounted && (
          <Canvas
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
            }}
            dpr={[1, 1.5]}
            gl={{
              antialias: false,
              powerPreference: "high-performance",
              toneMapping: THREE.ACESFilmicToneMapping,
            }}
            eventSource={document.getElementById("root")}
          >
            <Suspense fallback={null}>
              {techStackIcons.map((techStackIcon, index) => (
                <TechIconCardExperience
                  key={techStackIcon.name}
                  model={techStackIcon}
                  trackRef={getTrackRef(index)}
                />
              ))}
              <View.Port />
            </Suspense>
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default TechStack;
