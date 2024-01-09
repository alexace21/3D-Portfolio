import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
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
  softuni,
  commerzbank,
  threejs,
  dalle,
  tek,
  sreader,
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
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
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
    name: "Java",
    icon: java,
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
];

const experiences = [
  {
    title: "JavaScript Web Developer",
    company_name: "SoftUni",
    icon: softuni,
    iconBg: "#E6DEDD",
    date: "September 2019 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js, Express, MongoDB, Node.js",
      "Deep-dive into the Functional programming paradigm and software development lifecycle.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and sharing detailed feedback on Product & Application architecture design.",
    ],
  },
  {
    title: "Business/Technical Consultant",
    company_name: "TEK Experts",
    icon: tek,
    iconBg: "#E6DEDD",
    date: "December 2021 - December 2022",
    points: [
      "Act as a first line support, deliver advanced technical troubleshooting and business solutions for corporate clients.",
      "Diagnose and resolve technical issues in Microsoft Dynamics ERP, CRM, Office 365, Dynamics 365.",
      "Collaborate on cross-team and product issues. Identify technical/business root causes, deliver versatile solutions and document the incident",
      "Handful knowledge of Authentication vs Authorization using cloud computing service such as: Microsoft Azure.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Commerzbank",
    icon: commerzbank,
    iconBg: "#383E56",
    date: "December 2022 - Today",
    points: [
      "Transforming traditional banking services into seamless digital experiences. Adept at leveraging IBM Business Automation Workflow (BAW) to optimize processes and enhance customer interactions.",
      "Collaborating with cross-functional teams to design, develop, and deploy robust software solutions tailored to meet the bank's evolving needs.",
      "Contributing to the integration of AI-powered features for improved customer engagement and personalized banking experiences such as Document Administration/Management.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Web Developer",
    company_name: "SoftUni",
    icon: softuni,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Today",
    points: [
      "Developing and maintaining web applications using Spring and other related technologies.",
      "Deep-dive into the SOLID principles of programming, ORM, MySQL databases and the anatomy of DATA.",
      "Implementing Web API and REST services via Spring MVC model.",
      "Design and develop middlewares and engines for automation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vasko input here..",
    name: "Vasil Neykov",
    designation: "Senior Backend Developer",
    company: "Commerzbank AG",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Tatyana input here...",
    name: "Tatyana Vasileva",
    designation: "Chapter Lead",
    company: "Commerzbank AG",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Margo input here...",
    name: "Margarit Antonov",
    designation: "Senior Frontend Developer",
    company: "Commerzbank AG",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Alessandro input here... or Michaela Muth",
    name: "Alessandro/Michy",
    designation: "Product Owner",
    company: "Commerzbank AG",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "Web-based application that allows users to either browse through a collection of imaginative images requested by other Users, or create visually stunning images using OpenAI AI image generator (Dall-E).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "red-text-gradient",
      },
      {
        name: "nodeJS",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "black-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/alexace21/MERN-app-dall-e",
    production_code_link: "https://mern-dall-e.tech/",
  },
  {
    name: "Smart Reader",
    description:
      "Web application powered by OpenAI GPT-4 that enables users to summarize and read with lightning speed like never before!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "black-gradient",
      },
      {
        name: "tailwincss",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: sreader,
    source_code_link: "https://github.com/alexace21/Smart-Reader?tab=readme-ov-file",
    production_code_link: "https://earnest-belekoy-f7c68d.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
