import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden w-full min-h-screen">
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div
        className="relative z-10 w-full flex items-center justify-between"
        style={{
          minHeight: isDesktop ? "100vh" : "85vh",
          paddingTop: isDesktop ? "3rem" : "7rem",
        }}
      >
        {/* LEFT: Hero Content — occupies left 36% on desktop */}
        <header
          style={{
            width: isDesktop ? "48%" : "100%",
            paddingLeft: isDesktop ? "5vw" : undefined,
            paddingRight: isDesktop ? "0" : undefined,
            position: "relative",
            zIndex: 20,
          }}
          className="flex flex-col justify-center px-5 md:px-14 pointer-events-none"
        >
          <div className="flex flex-col gap-6 md:gap-7">
            <div className="hero-text flex flex-col justify-center text-[32px] sm:text-[45px] md:text-[54px] xl:text-[60px] font-semibold leading-tight text-white pointer-events-none">
              <h1>
                Shaping{" "}
                <span className="slide inline-block overflow-hidden h-[45px] sm:h-[58px] md:h-[68px] xl:h-[76px] align-middle px-1">
                  <span className="wrapper flex flex-col">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-2 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="size-7 sm:size-9 md:size-10 xl:size-12 p-1 md:p-2 rounded-full bg-white-50 object-contain"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 text-base md:text-xl relative z-10 pointer-events-none max-w-md">
              Hi, I'm Ritu Raj, a developer based in Kolkata with a passion for
              code.
            </p>

            <div className="pointer-events-auto">
              <Button
                text="See My Work"
                className="w-60 h-12 md:w-80 md:h-16"
                id="counter"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Room — takes right 55% on desktop, full width on mobile */}
        <figure
          style={{
            position: "absolute",
            right: 0,
            top: isDesktop ? 0 : "6rem",
            width: isDesktop ? "55%" : "100%",
            height: isDesktop ? "100vh" : "100%",
            zIndex: 10,
          }}
          className="min-h-[50vh] pointer-events-auto"
        >
          <div className="w-full h-full">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
