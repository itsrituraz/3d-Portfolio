# Portfolio

An interactive, performance-focused 3D developer portfolio built with **React**, **Three.js / React Three Fiber**, **GSAP**, and **Tailwind CSS**. 

This portfolio showcases full-stack web applications, technical skillsets, and development experience through immersive 3D scenes, smooth scroll-driven animations, and responsive modern UI engineering.

---

## ✨ Features

- **Interactive 3D Hero Scene**: Real-time 3D isometric developer room featuring custom spotlighting, ambient lighting, interactive orbit controls, and floating particle fields built with React Three Fiber.
- **Interactive 3D Tech Stack Showcase**: Six interactive 3D technology icons (React, Node.js, MongoDB, Three.js, PostgreSQL, Tailwind CSS) rendered using isolated `@react-three/drei` `<View>` scissored viewports, allowing individual model rotation and inspection.
- **Interactive 3D Workspace Scene**: Interactive vintage computer desk setup in the contact section with real-time drop shadows, custom materials, and orbit rotation controls.
- **Scroll-Driven GSAP Animations**: Smooth reveal animations, timeline progress indicators, text sliders, and an animated statistics counter powered by GSAP and ScrollTrigger.
- **Project Showcase**: Highlights major full-stack and web applications with live deployment links and responsive media cards.
- **Dynamic Mouse Glow Effects**: Interactive cards in the testimonials and experience sections with real-time mouse-tracking radial gradient glow borders.
- **Functional Contact Form**: Direct message delivery powered by EmailJS with form state validation and feedback states.
- **Fully Responsive Architecture**: Layouts tailored for desktop, tablet, and mobile viewports using Tailwind CSS and `react-responsive` hooks.
- **Performance-Optimized 3D & Asset Pipeline**:
  - Adaptive DPR scaling (`AdaptiveDpr`) and device pixel ratio capping to prevent GPU overdraw on high-DPI/mobile displays.
  - Drei `<View>` offscreen viewport culling to avoid unnecessary rendering when tech cards are outside the viewport.
  - Memoized Three.js geometries and materials to eliminate runtime re-instantiation.
  - High-effort WebP image compression with native `loading="lazy"`, `decoding="async"`, and explicit dimensions to prevent Largest Contentful Paint (LCP) delays and Cumulative Layout Shift (CLS).

---

## 🛠️ Tech Stack

### Frontend & Core
- **[React 19](https://react.dev/)** — UI library
- **[Vite](https://vitejs.dev/)** — Next-generation frontend build tool and development server
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — Core application logic
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Modern utility-first CSS framework with `@tailwindcss/vite`

### 3D & Graphics
- **[Three.js](https://threejs.org/)** — WebGL 3D graphics library
- **[@react-three/fiber](https://r3f.docs.pmnd.rs/)** — React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** — Helper library for React Three Fiber (View, Float, OrbitControls, useGLTF)

### Animation & Motion
- **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)** — High-performance web animation engine
- **[ScrollTrigger](https://greensock.com/scrolltrigger/)** — Scroll-driven timeline animations
- **[@gsap/react](https://github.com/greensock/react)** — Official React hook integration for GSAP

### Services & Utilities
- **[@emailjs/browser](https://www.emailjs.com/)** — Client-side email integration for the contact form
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon library
- **[react-responsive](https://github.com/yocontra/react-responsive)** — Media query hook for responsive 3D viewport adaptations

---

## 🚀 Projects

### 1. [Audora](https://audora-chi.vercel.app/login)
A full-stack Spotify-inspired music listening and streaming platform.
- **Core Technologies**: React, Node.js, Express.js, MongoDB
- **Key Features**: Audio playback streaming, authentication workflows, user library management, and modern responsive music player interface.
- **Live Demo**: [audora-chi.vercel.app](https://audora-chi.vercel.app/login)

### 2. [Media Search App](https://media-search-app-sigma.vercel.app/)
An intuitive media exploration and search application designed for discovering multimedia content.
- **Core Technologies**: React, REST APIs, Tailwind CSS
- **Key Features**: Live search querying, responsive content cards, and media discovery.
- **Live Demo**: [media-search-app-sigma.vercel.app](https://media-search-app-sigma.vercel.app/)

### 3. [Snake Game](https://snake-game-js-mocha.vercel.app/)
A classic arcade Snake game built with JavaScript.
- **Core Technologies**: Vanilla JavaScript, HTML5 Canvas / DOM, CSS3
- **Key Features**: Real-time game loop, collision detection mechanics, score tracking, and fluid controls.
- **Live Demo**: [snake-game-js-mocha.vercel.app](https://snake-game-js-mocha.vercel.app/)

---

## 📁 Project Structure

```text
my-3d-portfolio/
├── public/
│   ├── images/              # Project screenshots, textures, SVG icons, client photos
│   └── models/              # Optimized 3D GLB/GLTF models (room, computer, tech icons)
├── src/
│   ├── components/
│   │   ├── models/
│   │   │   ├── contact/     # Contact section 3D canvas & Computer model
│   │   │   ├── hero_models/ # Hero 3D room, lighting setup, and particle systems
│   │   │   └── tech_logos/  # Tech icon 3D card experience with isolated Viewports
│   │   ├── AnimatedCounter.jsx # ScrollTrigger-driven statistics counter
│   │   ├── Button.jsx          # Reusable action button component
│   │   ├── ExpContent.jsx      # Experience card content layout
│   │   ├── GlowCard.jsx        # Mouse-tracking radial gradient glow card
│   │   ├── NavBar.jsx          # Responsive fixed navigation bar
│   │   └── TitleHeader.jsx     # Section header typography component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section with headline and 3D room experience
│   │   ├── ShowcaseSection.jsx # Featured projects showcase with live links
│   │   ├── LogoShowcase.jsx    # Infinite logo marquee ribbon
│   │   ├── FeatureCards.jsx    # Developer strengths & core abilities
│   │   ├── Experience.jsx      # Work and leadership timeline with GSAP quickSetter
│   │   ├── TechStack.jsx       # 6-card 3D interactive technology grid
│   │   ├── Testimonials.jsx    # Client recommendations with GlowCards
│   │   ├── Contact.jsx         # EmailJS contact form and 3D computer workspace
│   │   └── Footer.jsx          # Social links and copyright
│   ├── constants/
│   │   └── index.js            # Centralized portfolio data, links, metrics, and models
│   ├── App.jsx                 # Root component composing all portfolio sections
│   ├── main.jsx                # Application entry point with global plugin registration
│   └── index.css               # Global styles, Tailwind directives, and custom animations
├── index.html                  # HTML entry template with Google Fonts preconnect
├── vite.config.js              # Vite configuration with Tailwind CSS & manual chunk splits
└── package.json                # Project dependencies and npm scripts
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version **18.x** or higher recommended).

### 1. Clone the repository

```bash
git clone <repository-url>
cd my-3d-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your [EmailJS](https://www.emailjs.com/) credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 5. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 👤 Author

**Ritu Raj**  
- **Location**: Kolkata, India  
- **LinkedIn**: [linkedin.com/in/itsrituraz](https://www.linkedin.com/in/itsrituraz)  
- **Twitter/X**: [@itsRituRaz](https://x.com/itsRituRaz)  
- **Instagram**: [@itsrituraz](https://www.instagram.com/itsrituraz)  

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
