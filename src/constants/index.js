import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,

  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";
import dgtglogo from '../assets/company/dgtglogo.jpeg';
import c3logo from '../assets/company/c3logo.jpeg';
import xologo from '../assets/company/xologo.jpeg';
import accenturelogo from '../assets/accenture.jpeg';
import twitter from '../assets/twitter.svg.png';
import githubdark from '../assets/githubdark.png';
import linkedin from '../assets/linkedin.png';
import dashboard from '../assets/dashboard.png';
import overview from '../assets/overview.png';
import reservista from '../assets/reservista_dashboard.jpeg';
import emotions from '../assets/emotions.jpeg';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "links",
    title: "Links",
  },
  {
    id: "bookshelf",
    title: "Bookshelf",
  }
  // {
  //   id: "bookshelf",
  //   title: "Bookshelf",
  // }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML / AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Engineer",
    company_name: "Navisite - Part of ACN",
    icon: accenturelogo,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Working on system operations and automation to improve efficiency and reliability.",
      "Collaborating with teams to enhance monitoring, troubleshooting, and workflows.",
      "Assisting in executing commands, managing configurations, and handling database-related tasks.",
      "Investigating and resolving technical issues to ensure seamless functionality.",
      "Contributing to process optimizations and technical improvements.",
    ],
  },
  {
    title: "Software Developer Engineer Intern",
    company_name: "EsportsXO",
    icon: xologo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Contributed to the foundational design and architecture of EsportsXO's platform as a core engineering team member.",
      "Designed and developed a comprehensive tournament management system, enabling seamless organization, registration, and real-time tracking of events.",
      "Worked closely with designers, managers, and developers to enhance product quality.",
      "Developed APIs and integrations with popular streaming platforms, allowing gamers and streamers to connect their accounts, showcase live gameplay, and engage with their audience directly from the platform.",
      "Implemented a token-based authentication system for user data security.",
    ],
  },
  {
    title: "Full Stack Developer Intern ",
    company_name: "Dgtg",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jan 2023",
    points: [
      "Developed and optimized web applications using React, ensuring responsive design and seamless user experience.",
      "Contributed to web enhancements for marketing campaigns.",
      "Administered MongoDB databases, ensuring efficient data storage and retrieval.",
      "Applied optimization techniques for faster-loading websites and improved SEO rankings.",
    ],
  },
  {
    title: "Founding Member",
    company_name: "C3Links",
    icon: c3logo,
    iconBg: "#383E56", 
    date: "Feb 2022 - Dec 2022",
    points: [
      "Part of the founding engineering team at C3 Links.",
      "Built Admin Side Asset management tool using MERN stack.",
      "Developed tools for handling huge financial data sets and APIs for big data management.",
      "Built and maintained user side full stack decentralized web application on multiple chains using React.js, Web3.js.",
      "Implemented various Token based authentication as well as wallet based authentication.",
    ],
  },
  
];
const books = [
  {
    title: "What to Think About Machines That Think",
    company_name: "John Brockman (ed.)",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Essays & Perspectives",
    points: [
      "A collection of 192 essays from the world's brightest minds on the rise of artificial intelligence.",
      "Explores philosophical, ethical, and societal implications of thinking machines.",
      "Covers perspectives from scientists, philosophers, and technologists on AI's future impact.",
    ],
  },
  {
    title: "How to Live",
    company_name: "Sarah Bakewell",
    icon: xologo,
    iconBg: "#E6DEDD",
    date: "Biography / Philosophy",
    points: [
      "A life of Montaigne told through 20 attempts to answer the question of how to live.",
      "Blends biography with philosophy, drawing on Montaigne's Essays for timeless wisdom.",
      "A meditation on self-knowledge, curiosity, and the art of living well.",
    ],
  },
  {
    title: "The Well-Tempered City",
    company_name: "Jonathan F. P. Rose",
    icon: c3logo,
    iconBg: "#383E56",
    date: "Urban Design / Systems",
    points: [
      "Explores how cities can be designed to be more equitable, resilient, and sustainable.",
      "Draws on science, history, and social policy to propose a new framework for urban development.",
      "Argues that well-designed cities can balance economic growth with social and environmental health.",
    ],
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    company_name: "Stuart J. Russell, Peter Norvig",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Textbook / AI",
    points: [
      "The definitive textbook on artificial intelligence, covering search, logic, planning, learning, and more.",
      "Provides a comprehensive overview of the field from foundational algorithms to modern deep learning.",
      "Essential reading for understanding the theoretical underpinnings of AI systems.",
    ],
  },
  {
    title: "Types and Programming Languages",
    company_name: "Benjamin C. Pierce",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Textbook / PL Theory",
    points: [
      "A comprehensive introduction to type systems and their role in programming language design.",
      "Covers lambda calculus, subtyping, polymorphism, and recursive types with formal rigor.",
      "Bridges theory and practice, showing how type systems prevent errors and guide program structure.",
    ],
  },
];
const social = [
  {
    title: "GitHub",
    company_name: "github.com/namantoo",
    icon: githubdark,
    iconBg: "#E6DEDD",
    date: "GitHub",
    url: "https://github.com/namantoo",
    points: [],
  },
  {
    title: "LinkedIn",
    company_name: "linkedin.com/in/naman-33751713a",
    icon: linkedin,
    iconBg: "#383E56",
    date: "LinkedIn",
    url: "https://www.linkedin.com/in/naman-33751713a/",
    points: [],
  },
];

const testimonials = [];
const projectsArchive = [
  // {
  //   name: "AuSent",
  //   description:
  //     " A web app that uses advanced algorithms to analyze and determine emotions in spoken content, offering real-time insights for diverse applications.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "",
  //     },
  //     {
  //       name: "NodeJs",
  //      color: "",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },

  // {
  //   name: "Telegram-GPT3.5",
  //   description:
  //     "A seamless chat-bot that bridges Telegram users with ChatGPT via the OpenAI API for real-time, intelligent conversations.",
  //   tags: [
  //     {
  //       name: "NodeJs",
  //       color: "",
  //     },
  //     {
  //       name: "OpenAi Api",
  //      color: "",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
 
];

const projects = [
  {
    name: "Reservista",
    description:
      "Reservista is a comprehensive full-stack application designed for hotel owners and managers. It offers seamless booking management with features like a real-time floor plan, roster tracking, and automated rate adjustments. Users can efficiently handle reservations, monitor room availability, and manage staff through a user-friendly interface that includes a secure login/signup system and a detailed dashboard.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    image: reservista,
    source_code_link: "https://reservista-development.vercel.app/login",
  },
  {
    name: "Invx",
    description:
      "Invx is a comprehensive full-stack application designed for cryptocurrency enthusiasts. It offers seamless wallet integration with platforms like MetaMask, Rainbow, and Coinbase. Users can effortlessly add funds, invest in cryptocurrencies, and monitor transactions through a user-friendly interface that includes a secure login/signup system, a detailed dashboard",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Web3.js", color: "orange-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
    ],
    image: dashboard,
    source_code_link: "https://github.com/namantoo/Invx",
  },
  {
    name: "EchoNava",
    description:
    "EchoNava is an audio sentiment analysis model designed to classify emotions from audio inputs. It processes spectrogram images using a convolutional neural network (CNN) to identify sentiments like happy, sad, angry, and neutral. The model is trained on a curated dataset of 10,000 audio clips, with preprocessing techniques applied for quality consistency. Users can load a pre-trained model and analyze sentiment.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "orange-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
    ],
    image: emotions,
    source_code_link: "https://github.com/namantoo/EchoNava-Model",
  },
  // {
  //   name: "Invx",
  //   description:
  //     "Invx is a comprehensive full-stack application designed for cryptocurrency enthusiasts. It offers seamless wallet integration with platforms like MetaMask, Rainbow, and Coinbase. Users can effortlessly add funds, invest in cryptocurrencies, and monitor transactions through a user-friendly interface that includes a secure login/signup system, a detailed dashboard",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "",
  //     },
  //     {
  //       name: "NodeJS",
  //      color: "",
  //     },
  //     {
  //       name: "Web3.js",
  //       color: "",
  //     },
  //   ],
  //   image: dashboard,
  //   source_code_link: "https://github.com/namantoo/Invx",
  // },
  {
    name: "Transactions API",
    description:
      "This API offers a comprehensive suite of tools, from initiating crypto transactions and tracking investment timings to ensuring secure withdrawals and providing insights into returns and profits. With an emphasis on user experience and security, it's an essential tool for both crypto novices and experts.",
    tags: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: overview,
    source_code_link: "https://github.com/namantoo/Transactions-Monitoring-Api",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "",
  //     },
  //     {
  //       name: "supabase",
  //      color: "",
  //     },
  //     {
  //       name: "css",
  //       color: "",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // }
];

export { services, technologies, experiences, testimonials, projects, projectsArchive, books, social};
