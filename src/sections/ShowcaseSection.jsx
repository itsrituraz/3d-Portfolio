import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h2 className="showcase-heading">My Work</h2>
        <div className="showcaselayout">

          {/* AUDORA */}
          <a
            href="https://audora-chi.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            ref={rydeRef}
            className="first-project-wrapper block"
          >
            <div className="image-wrapper">
              <img
                src="/images/project1.webp"
                alt="Audora Music Streaming Platform"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="text-content">
              <h2>
                Audora — A Full-Stack Music Streaming Platform
              </h2>

              <p className="text-white-50 md:text-xl">
                A Spotify-style music streaming/Listening platform built with React,
                Node.js, Express, MongoDB and modern web technologies.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">

            {/* MEDIA SEARCH APP */}
            <a
              href="https://media-search-app-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project block"
              ref={libraryRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.webp"
                  alt="Media Search App"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h2>Media Search App</h2>
            </a>

            {/* SNAKE GAME */}
            <a
              href="https://snake-game-js-mocha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project block"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/project3.webp"
                  alt="Snake Game"
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h2>Snake Game</h2>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;