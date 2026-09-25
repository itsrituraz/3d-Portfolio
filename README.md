# Ritu Raj — 3D Developer Portfolio

<p align="center">
  <img src="./public/images/readme.png" alt="Ritu Raj — 3D Developer Portfolio Preview" width="100%" />
</p>

<p align="center">
  An immersive, performance-focused 3D developer portfolio engineered with <strong>React 19</strong>, <strong>Three.js</strong>, <strong>React Three Fiber</strong>, <strong>GSAP</strong>, and <strong>Tailwind CSS v4</strong>. Showcasing real-world full-stack web applications, interactive 3D graphics, responsive UI engineering, and modern web animations.
</p>

<p align="center">
  <a href="https://rituraj-3d-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Live_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" />
  </a>
  &nbsp;
  <a href="https://github.com/itsrituraz/3d-Portfolio" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub_Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
</p>

---

## ✨ Features

- **3D Hero Room Experience**: Real-time isometric developer room (`optimized-room.glb`) rendered with React Three Fiber, featuring custom ambient and directional lighting, clamped OrbitControls, responsive camera positioning, and a floating particle field.
- **Interactive 3D Technology Stack**: Six interactive 3D technology cards (React, Node.js, MongoDB, Three.js, PostgreSQL, Tailwind CSS) rendered inside a single shared WebGL `<Canvas>` using isolated `@react-three/drei` `<View>` scissored viewports, allowing independent rotation and inspection of each model without GPU context overload.
- **3D Workspace Scene**: Interactive vintage computer desk setup in the contact section with real-time shadow casting (`castShadow` and `receiveShadow`), a custom wood desk surface, and 360-degree rotational orbit controls.
- **Scroll-Driven GSAP Animations**: High-performance entrance reveals, staggered element fades, dynamic hero headline word rotator, infinite marquee logo ribbon, and an animated numerical statistics counter powered by GSAP and ScrollTrigger.
- **Dynamic Mouse Glow Effects**: Interactive cards in the experience and testimonials sections featuring real-time mouse-tracking radial gradient glow borders.
- **Project Showcase**: Production-grade project presentations highlighting full-stack architectures, key functionalities, live deployment previews, and verified source code repositories.
- **Functional Contact Form**: Direct client-side email delivery integrated via `@emailjs/browser` with form field validation, active loading states, and instant success confirmation modals.
- **Fully Responsive Architecture**: Adaptive mobile, tablet, and desktop layouts designed with Tailwind CSS utility architecture and `react-responsive` hooks that automatically adjust 3D model scales and camera positions across screen sizes.
- **Comprehensive Performance Optimizations**:
  - **Adaptive DPR & Performance Monitoring**: Dynamic device pixel ratio scaling (`AdaptiveDpr` and `PerformanceMonitor`) that automatically scales DPR between 1 and 2 depending on GPU rendering load to maintain smooth frame rates on low-power devices.
  - **Single WebGL Context via Drei `<View>`**: Hosts all six 3D skill cards within one Canvas rather than instantiating six separate WebGL contexts, avoiding browser context limits and memory bloat.
  - **Offscreen Viewport Culling**: Automatically pauses rendering of 3D cards when they are outside the user's viewport.
  - **3D Model Compression**: GLTF models transformed and meshopt-compressed via `@gltf-transform/cli` for rapid network loading.
  - **Modern WebP Image Pipeline**: High-efficiency WebP image assets with explicit width/height dimensions, `loading="lazy"`, and `decoding="async"` to eliminate Cumulative Layout Shift (CLS) and improve Largest Contentful Paint (LCP).
  - **Manual Chunk Splitting in Vite**: Rollup chunk splitting separating `three-vendor`, `r3f-vendor`, and `gsap-vendor` for optimal HTTP browser caching.

---

## 🛠️ Tech Stack

### Frontend
- **[React 19](https://react.dev/)** — Modern component-based declarative UI library
- **[Vite](https://vitejs.dev/)** — Next-generation frontend build tooling and development server
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — Modern ECMAScript application logic
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework with native `@tailwindcss/vite` integration

### 3D & Graphics
- **[Three.js](https://threejs.org/)** — Industry-standard WebGL 3D graphics library
- **[React Three Fiber](https://r3f.docs.pmnd.rs/)** — Declarative React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** — Comprehensive collection of functional helpers and abstractions for React Three Fiber (`View`, `OrbitControls`, `AdaptiveDpr`, `PerformanceMonitor`)

### Animation
- **[GSAP (GreenSock Animation Platform)](https://gsap.com/)** — High-performance web animation engine
- **[ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)** — Scroll-driven timeline trigger and layout animations
- **[@gsap/react](https://gsap.com/resources/React/)** — Official GSAP integration hook for React component lifecycles

### Services / Utilities
- **[@emailjs/browser](https://www.emailjs.com/)** — Client-side email dispatch service for contact messaging
- **[React Icons](https://react-icons.github.io/react-icons/)** — Popular SVG iconography library
- **[react-responsive](https://github.com/yocontra/react-responsive)** — Responsive media query hooks for responsive 3D viewport adaptations

---

## 🚀 Featured Projects

### 1. Audora — Full-Stack Music Streaming Platform
A full-stack Spotify-inspired music listening and streaming web application engineered for audio playback, user authentication, and song discovery.

- **Technologies**: React, Node.js, Express.js, MongoDB, Tailwind CSS
- **Key Features**:
  - Real-time audio playback streaming with progress and volume controls
  - User authentication and session management
  - Curated song discovery, library navigation, and responsive player layout
- **Live Demo**: [audora-chi.vercel.app](https://audora-chi.vercel.app/login)
- **GitHub Repository**: [itsrituraz/audora](https://github.com/itsrituraz/audora)

### 2. Media Search App
An intuitive media discovery and exploration application designed to query and view multimedia content through external API integrations.

- **Technologies**: React, JavaScript (ES6+), REST APIs, Tailwind CSS
- **Key Features**:
  - Real-time search query handling and instant content filtering
  - Responsive multimedia card layout with clean visual hierarchy
  - Graceful handling of asynchronous API states and error fallbacks
- **Live Demo**: [media-search-app-sigma.vercel.app](https://media-search-app-sigma.vercel.app/)
- **GitHub Repository**: [itsrituraz/Media-Search-App](https://github.com/itsrituraz/Media-Search-App)

### 3. Snake Game
A classic arcade Snake game built with vanilla JavaScript, featuring dynamic grid movement, collision mechanics, and local score persistence.

- **Technologies**: Vanilla JavaScript (ES6+), HTML5 Canvas / DOM, CSS3
- **Key Features**:
  - Real-time game loop with responsive keyboard arrow controls
  - Dynamic collision detection against game borders and snake body
  - Real-time score counter, high-score tracking, elapsed timer, and restart controls
- **Live Demo**: [snake-game-js-mocha.vercel.app](https://snake-game-js-mocha.vercel.app/)
- **GitHub Repository**: [itsrituraz/snake-game-js](https://github.com/itsrituraz/snake-game-js)

---

## 📁 Project Structure

```text
3d-Portfolio/
├── public/
│   ├── images/              # Project screenshots, textures, SVG logos, client avatars, banner
│   ├── models/              # Optimized 3D GLB models (room, computer, tech icons)
│   └── Resume.pdf           # Downloadable resume asset
├── src/
│   ├── components/
│   │   ├── models/
│   │   │   ├── contact/     # 3D workspace canvas & vintage computer model
│   │   │   ├── hero_models/ # 3D developer room, lighting setup, and particle systems
│   │   │   └── tech_logos/  # 3D tech icons with scissored Viewport experience
│   │   ├── AnimatedCounter.jsx # ScrollTrigger-driven numerical statistics counter
│   │   ├── Button.jsx          # Reusable action button component
│   │   ├── ExpContent.jsx      # Work experience timeline card layout
│   │   ├── GlowCard.jsx        # Mouse-tracking radial gradient glow border card
│   │   ├── NavBar.jsx          # Scroll-aware fixed navigation bar with mobile/desktop states
│   │   └── TitleHeader.jsx     # Reusable section header typography component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section with headline slider and 3D room experience
│   │   ├── ShowcaseSection.jsx # Featured projects showcase with live links & media cards
│   │   ├── LogoShowcase.jsx    # Infinite logo marquee ribbon
│   │   ├── FeatureCards.jsx    # Core developer strengths & technical abilities
│   │   ├── Experience.jsx      # Work and leadership experience timeline with GSAP quickSetter
│   │   ├── TechStack.jsx       # 6-card interactive 3D technology grid using Drei View
│   │   ├── Testimonials.jsx    # Client recommendations with interactive GlowCards
│   │   ├── Contact.jsx         # EmailJS contact form and 3D computer workspace
│   │   └── Footer.jsx          # Social connections, navigation links, and copyright
│   ├── constants/
│   │   └── index.js            # Centralized portfolio data, metrics, navigation, and model paths
│   ├── App.jsx                 # Root layout assembling all portfolio sections
│   ├── main.jsx                # React DOM entry point with GSAP plugin registration
│   └── index.css               # Global styling, Tailwind directives, and custom keyframes
├── index.html                  # HTML entry template with Google Fonts preconnection
├── vite.config.js              # Vite configuration with Tailwind CSS & manual vendor chunk splitting
└── package.json                # Project manifest, dependencies, and build scripts
```

### Folder & Component Overview
- **`src/components/models/`**: Houses all 3D Canvas scenes, lighting configurations, particle effects, and GLTF model loaders separated into Hero, Tech Logos, and Contact scenes.
- **`src/sections/`**: Modular presentation sections composing the single-page portfolio layout, including the Hero, Project Showcase, Experience timeline, 3D Tech Stack, Testimonials, and Contact form.
- **`src/constants/index.js`**: Centralized configuration file storing navigation links, project data, timeline cards, testimonials, metrics, and 3D model asset paths for easy maintenance.
- **`public/models/`**: Houses transformed and compressed binary `.glb` 3D assets loaded asynchronously at runtime.

---

## ⚙️ Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine (version **18.x** or higher is recommended).

### 1. Clone the repository
```bash
git clone https://github.com/itsrituraz/3d-Portfolio.git
```

### 2. Navigate to the project directory
```bash
cd 3d-Portfolio
```

### 3. Install dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root of the project and supply your EmailJS service credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 6. Build for production
```bash
npm run build
```

### 7. Preview production build locally
```bash
npm run preview
```

---

## 🔐 Environment Variables

The project utilizes [EmailJS](https://www.emailjs.com/) to process messages submitted via the contact form directly from the client side without requiring a separate backend service.

Create a `.env` file in the project root directory with the following variables:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> [!IMPORTANT]
> The `.env` file contains your private API credentials and is intentionally excluded from version control via `.gitignore`. Never commit or push sensitive API credentials or secret keys to public repositories.

---

## 👤 Author

**Ritu Raj**  
- **Location**: Kolkata, India  
- **Portfolio**: [rituraj-3d-portfolio.vercel.app](https://rituraj-3d-portfolio.vercel.app)  
- **GitHub**: [@itsrituraz](https://github.com/itsrituraz)  
- **LinkedIn**: [linkedin.com/in/itsrituraz](https://www.linkedin.com/in/itsrituraz)  
- **Twitter / X**: [@itsRituRaz](https://x.com/itsRituRaz)  
- **Instagram**: [@itsrituraz](https://www.instagram.com/itsrituraz)  
- **WhatsApp**: [+91 6201274623](https://wa.me/916201274623)
