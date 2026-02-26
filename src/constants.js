// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Project Section Logo's

import img1 from './assets/work_logo/img1.jpeg';
import img2 from './assets/work_logo/img2.jpeg';
import img3 from './assets/work_logo/img3.jpeg';
import img4 from './assets/work_logo/img4.jpeg';
import img5 from './assets/work_logo/img5.jpeg';
import img6 from './assets/work_logo/img6.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
       { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
  
  export const projects = [
    {
      id: 0,
      title: "Currency Converter",
      description:
        "A JavaScript-based currency converter that fetches real-time exchange rates from an external API. Users can select currencies, view country flags dynamically, and convert amounts instantly with proper error handling and input validation.",
      image: img1,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aroobadilshad-dev333/PrimeFXConverter-JS.git",
      webapp: "https://prime-fx-converter-js.vercel.app/",
    },
    {
      id: 1,
      title: "TransformText-App",
      description:
        "A handy text manipulation and analysis tool built with React.js, offering real-time text transformations, detailed analytics, clipboard utilities, and a responsive Bootstrap-based interface with dark/light mode support.",
      image: img2,
        tags: ['React.js' ,'Bootstrap', 'JavaScript (ES6+)'],
      github: "https://github.com/Aroobadilshad-dev333/TransformText-Pro.git",
      webapp: "https://transform-text-pro.vercel.app/",
    },
    {
      id: 2,
      title: "Musify App",
      description:
        "A React-based music player web application inspired by Spotify's interface, designed to provide smooth and intuitive audio playback. It uses React hooks and the HTML5 Audio API to manage play, pause, seek, and track navigation with real-time UI updates.",
      image: img3,
        tags: ["React JS", "API", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Aroobadilshad-dev333/My-Musify-App.git",
      webapp: "https://my-musify-app.vercel.app/",
    },
    {
      id: 3,
      title: "Play Rock Paper Scissors",
      description:
        "A classic Rock Paper Scissors web game built using Vanilla JavaScript, featuring interactive gameplay between the user and the computer. The game includes real-time score tracking, dynamic result messages, and visual feedback for wins, losses, and draws.",
      image: img4,
        tags: ["HTML5", "CSS3", "JavaScript(ES6+)", ],
      github: "https://github.com/Aroobadilshad-dev333/Rock-paper-scissors-game.git",
      webapp: "https://rock-paper-scissors-game-kappa-seven.vercel.app/",
    },
    {
      id: 4,
      title: "Virtual Reality Web App",
      description:
        "VR Studio is a comprehensive VR (Virtual Reality) app development platform that empowers developers to create immersive VR applications with intuitive drag-and-drop tools. Build, collaborate, and deploy VR experiences across multiple platforms seamlessly.",
     image: img5,
        tags: ["React", "Vite", "TailwindCSS", "Lucide React "],
      github: "https://github.com/Aroobadilshad-dev333/VR-Studio.git",
      webapp: "https://vrstudio-three.vercel.app/",
    },
    {
      id: 5,
      title: "Electronics E-commerce web App",
      description:
        "Built a responsive e-commerce frontend where users can browse, filter, and view electronic products, with a persistent shopping cart managed via React Context. Integrated the Fake Store API for product data and OpenStreetMap Nominatim for location features.",
    image: img6,
        tags: ["React", "Vite", "React Router", "Tailwind CSS", "APIs",'Lint'],
      github: "https://github.com/Aroobadilshad-dev333/Voltify-App.git",
      webapp: "https://voltifyapp.vercel.app/",
    },
  ];  