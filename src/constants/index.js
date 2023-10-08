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
import twitter from '../assets/twitter.svg.png';
import githubdark from '../assets/githubdark.png';
import linkedin from '../assets/linkedin.png';
import dashboard from '../assets/dashboard.png';
import overview from '../assets/overview.png';



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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Software Developer Engineer",
    company_name: "EsportsXO",
    icon: xologo,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Contributed to the foundational design and architecture of EsportsXO's platform as a core engineering team member.",
      "Designed and developed a comprehensive tournament management system, enabling seamless organization, registration, and real-time tracking of events.",
      "Worked closely with designers, managers, and developers to enhance product quality.",
      "Developed APIs and integrations with popular streaming platforms, allowing gamers and streamers to connect their accounts, showcase live gameplay, and engage with their audience directly from the platform.",
      "Implemented a token-based authentication system for user data security.",
    ],
  },
  {
    title: "Full Stack Developer ",
    company_name: "Dgtg",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jan 2033",
    points: [
      "Developed and optimized web applications using React, ensuring responsive design and seamless user experience.",
      "Contributed to web enhancements for marketing campaigns.",
      "Administered MongoDB databases, ensuring efficient data storage and retrieval.",
      "Applied optimization techniques for faster-loading websites and improved SEO rankings.",
    ],
  },
  {
    title: "Software Developer Engineer, Founding Member",
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
    company_name: "John Brockman",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Developed and optimized web applications using React, ensuring responsive design and seamless user experience.",
      "Contributed to web enhancements for marketing campaigns.",
      "Administered MongoDB databases, ensuring efficient data storage and retrieval.",
      "Applied optimization techniques for faster-loading websites and improved SEO rankings.",
    ],
  },
  {
    title: "How to Live",
    company_name: "Sarah Bakewell",
    icon: xologo,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "The Well-Tempered City: What Modern Science...",
    company_name: "Jonathan F. P. Rose ",
    icon: c3logo,
    iconBg: "#383E56",
    date: "Mar 2022 - Nov 2022",
    points: [
      "Part of the founding engineering team at C3 Links.",
      "Built Admin Side Asset management tool using MERN stack.",
      "Developed tools for handling huge financial data sets and APIs for big data management.",
      "Built and maintained user side full stack decentralized web application on multiple chains using React.js, Web3.js.",
      "Implemented various Token based authentication as well as wallet based authentication.",
    ],
  },
  {
    title: "Artificial Intelligence: A Modern Approach ",
    company_name: "Stuart J. Russell, Peter Norvig",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Developed and optimized web applications using React, ensuring responsive design and seamless user experience.",
      "Contributed to web enhancements for marketing campaigns.",
      "Administered MongoDB databases, ensuring efficient data storage and retrieval.",
      "Applied optimization techniques for faster-loading websites and improved SEO rankings.",
    ],
  },
  {
    title: "Types and Programming Languages (Mit Press) ",
    company_name: "Benjamin C. Pierce",
    icon: dgtglogo,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Developed and optimized web applications using React, ensuring responsive design and seamless user experience.",
      "Contributed to web enhancements for marketing campaigns.",
      "Administered MongoDB databases, ensuring efficient data storage and retrieval.",
      "Applied optimization techniques for faster-loading websites and improved SEO rankings.",
    ],
  },
]
//Types and Programming Languages (Mit Press) 
const social = [
  {
    title: "Github",
    company_name: "Dgtg",
    icon: githubdark,
    iconBg: "#E6DEDD",
    date: "Github",
    url: "https://github.com/namantoo",
    points: [
      "Developed and optimized web applications using React, ensuring responsive design and seamless user experience.",
      "Contributed to web enhancements for marketing campaigns.",
      "Administered MongoDB databases, ensuring efficient data storage and retrieval.",
      "Applied optimization techniques for faster-loading websites and improved SEO rankings.",
    ],
  },
  {
    title: "Twitter",
    company_name: "Author1",
    icon: twitter,
    iconBg: "#E6DEDD",
    date: "Twitter",
    url: "https://twitter.com/namantoo",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Linkedin",
    company_name: "C3Links",
    icon: linkedin,
    iconBg: "#383E56",
    date: "Linkedin",
    url: "https://www.linkedin.com/in/naman-33751713a/",
    points: [
      "Part of the founding engineering team at C3 Links.",
      "Built Admin Side Asset management tool using MERN stack.",
      "Developed tools for handling huge financial data sets and APIs for big data management.",
      "Built and maintained user side full stack decentralized web application on multiple chains using React.js, Web3.js.",
      "Implemented various Token based authentication as well as wallet based authentication.",
    ],
  },
  
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projectsArchive = [
  {
    name: "AuSent",
    description:
      " A web app that uses advanced algorithms to analyze and determine emotions in spoken content, offering real-time insights for diverse applications.",
    tags: [
      {
        name: "Python",
        color: "",
      },
      {
        name: "NodeJs",
       color: "",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "",
  //     },
  //     {
  //       name: "restapi",
  //      color: "",
  //     },
  //     {
  //       name: "scss",
  //       color: "",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Telegram-GPT3.5",
    description:
      "A seamless chat-bot that bridges Telegram users with ChatGPT via the OpenAI API for real-time, intelligent conversations.",
    tags: [
      {
        name: "NodeJs",
        color: "",
      },
      {
        name: "OpenAi Api",
       color: "",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Project 4",
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
  // },
  // {
  //   name: "Project 5",
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
  // },
  // {
  //   name: "Project 6",
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

const projects = [
  {
    name: "Invx",
    description:
      "Invx is a comprehensive full-stack application designed for cryptocurrency enthusiasts. It offers seamless wallet integration with platforms like MetaMask, Rainbow, and Coinbase. Users can effortlessly add funds, invest in cryptocurrencies, and monitor transactions through a user-friendly interface that includes a secure login/signup system, a detailed dashboard",
    tags: [
      {
        name: "React",
        color: "",
      },
      {
        name: "NodeJS",
       color: "",
      },
      {
        name: "Web3.js",
        color: "",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/namantoo/Invx",
  },
  {
    name: "Transactions Monitoring API",
    description:
      "This API offers a comprehensive suite of tools, from initiating crypto transactions and tracking investment timings to ensuring secure withdrawals and providing insights into returns and profits. With an emphasis on user experience and security, it's an essential tool for both crypto novices and experts.                           ",
    tags: [
      {
        name: "NodeJs",
        color: "",
      },
      {
        name: "MongoDB",
       color: "",
      },
      {
        name: "Oauth",
        color: "",
      },
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
