import {
  wou,
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
  airc,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  second,
  third,
  wp,
 
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "wordpress",
    icon: wp,
  },
];

const experiences = [
  
  {
    title: "Wordpress Developer",
    company_name: "AI RESEARCH CENTER",
    icon: wou,
    iconBg: "#383E56",
    date: "Mar 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
   
  },
  {
    title: "web Developer",
    company_name: "AI RESEARCH CENTER",
    icon: wou,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using Frontend and other related technologies.",
      "Collaborating with teams including designers, and other developers to create effficient websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],

  },
];

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

const projects = [
  {
    name: "AI research center",
    description:
      "Web-based platform that allows users to search and manage everything related to AI research center including blogs.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: airc,
    source_code_link: "https://github.com/",
  },
  {
    name: "LLM playground",
    description:
      "Web application that allows to use the models which are already integrated in the website",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: second,
    source_code_link: "https://github.com/",
  },
  {
    name: "Protofolio",
    description:
      "portofolio design where we can showcase all our skills,works and experiences and grab great opportunities.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: third,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
