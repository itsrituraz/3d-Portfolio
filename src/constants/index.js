const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Years Learning to Code" },
  { value: 5, suffix: "+", label: "Technologies Learned" },
  { value: 100, suffix: "%", label: "Passion for Development" },
];

const logoIconsList = [
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind.svg",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript.svg",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.svg",
  },
  {
    name: "React Three Fiber",
    imgPath: "/images/logos/r3f.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/nodejs.svg",
  },
  {
    name: "Express.js",
    imgPath: "/images/logos/express.svg",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    imgPath: "/images/logos/postgresql.svg",
  },
  {
    name: "GSAP",
    imgPath: "/images/logos/gsap.svg",
  },
  {
    name: "Vercel",
    imgPath: "/images/logos/vercel.svg",
  },
  {
    name: "GitHub",
    imgPath: "/images/logos/github.svg",
  },
  {
    name: "Netlify",
    imgPath: "/images/logos/netlify.svg",
  },
  {
    name: "OAuth",
    imgPath: "/images/logos/oauth.svg",
  },
];

const abilities = [
  {
    icon: "refresh",
    title: "Adaptable Developer",
    desc: "I quickly adapt to new technologies and tools, learning what is needed to solve the problem and build better solutions.",
  },
  {
    icon: "target",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    icon: "puzzle",
    title: "Problem Solver",
    desc: "I break complex problems into smaller, practical solutions and continuously improve my approach.",
  },
  {
    icon: "layers",
    title: "Full Stack Development",
    desc: "I build complete applications across the frontend, backend, APIs and Databases.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "MongoDB",
    modelPath: "/models/mongodb-transformed.glb",
    scale: 0.18,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "PostgreSQL",
    modelPath: "/models/postgresql-transformed.glb",
    scale: 0.18,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwind-transformed.glb",
    scale: 0.2,
    rotation: [0, 0, 0],
  },

];

const expCards = [
  
  {
    title: "Full Stack Developer",
    date: "November 2025 - Present",
    badge: "Development Experience",
    showStars: false,
    review:
      "Architected and deployed full-stack web applications, engineering robust REST APIs, authentication workflows, responsive frontend interfaces, and database integrations.",
    imgPath: "/images/exp-fullstack.svg",
    logoPath: "/images/logos/fullstack-code.svg",
    responsibilities: [
      "Built full-stack web applications using React, Node.js, Express.js, and MongoDB.",
      "Developed REST APIs, authentication, database models, and frontend integrations.",
      "Worked on real-world projects involving file uploads, media management, and third-party APIs.",
    ],
  },
  {
    title: "Smart India Hackathon — Team Lead",
    date: "2025 - 2026",
    badge: "Hackathon & Leadership",
    showStars: false,
    review:
      "Led an engineering team in architecting an automated document screening platform for border security, integrating OCR extraction and forensic tampering detection.",
    imgPath: "/images/exp-hackathon.svg",
    logoPath: "/images/logos/sih-security.svg",
    responsibilities: [
      "Led a team developing an AI-based document screening platform for border security.",
      "Implemented OCR-based document extraction and image-forensics based tampering detection.",
      "Designed a risk-scoring workflow to help classify documents for further action.",
    ],
  },
  {
    title: "Finance & Research Analyst Intern",
    date: "February 2025 - March 2025",
    badge: "Internship Summary",
    showStars: false,
    review:
      "Conducted equity and market research across diverse sectors, analyzing market trends, financial datasets, and investment opportunities to generate research-backed insights.",
    imgPath: "/images/exp-finance.svg",
    logoPath: "/images/logos/finance-analysis.svg",
    responsibilities: [
      "Conducted equity and market research to analyze companies, sectors, and investment opportunities.",
      "Studied financial data and market trends to support research-based insights.",
      "Prepared research findings and developed a better understanding of financial markets.",
    ],
  },
];

const expLogos = [
  {
    name: "Finance & Research",
    imgPath: "/images/logos/finance-analysis.svg",
  },
  {
    name: "Full Stack Developer",
    imgPath: "/images/logos/fullstack-code.svg",
  },
  {
    name: "Smart India Hackathon",
    imgPath: "/images/logos/sih-security.svg",
  },
];

const testimonials = [
  {
    name: "Aahan",
    mentions: "@estherhoward",
    review:
      "Working with Ritu was a smooth experience. He communicates clearly, takes feedback seriously, and puts genuine effort into improving the final result.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Riaan",
    mentions: "@riankhan",
    review:
      "Ritu has a strong interest in modern web development and is constantly working on improving his technical skills. He is comfortable working across different parts of a project and is not afraid to learn something new when a problem requires it.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Manish Kumar",
    mentions: "@manishkumar12",
    review:
      "Ritu is a dedicated developer who approaches problems with curiosity and a strong willingness to learn. He consistently works towards finding practical solutions.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Saksham Sagar",
    mentions: "@sakshamsagar123",
    review:
      "Ritu approaches development with a practical problem-solving mindset. He likes breaking complex requirements into smaller parts and gradually turning them into working solutions. He also pays attention to the overall user experience rather than focusing only on writing code.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Ritu is a developer who is continuously improving through hands-on projects and experimentation. He takes ownership of the things he builds, learns from challenges along the way, and keeps looking for better ways to approach a problem!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Ashish Raj",
    mentions: "@coolbouy",
    review:
      "Ritu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  techStackIcons,
  techStackImgs,
  navLinks,
};
