import { nanoid } from "nanoid";
import { RiNextjsFill, RiTailwindCssFill, RiNodejsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiCss3,
  SiShadcnui,
  SiPrisma,
} from "react-icons/si";
import reactjsStore from "./assets/reactjs-store.jpeg";
import nextjsStore from "./assets/nextjs-store.jpeg";
import ahaEvents from "./assets/ahaevents.jpg";
import todolist from "./assets/todolist.jpg";
import dicegame from "./assets/dicegame.jpg";
import simongame from "./assets/simongame.jpg";
import backroads from "./assets/backroads.jpg";
import colorGenerate from "./assets/color-generate.jpg";
import menu from "./assets/menu.jpg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML5",
    icon: <SiHtml5 className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "CSS3",
    icon: <SiCss3 className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "JavasScript",
    icon: <SiJavascript className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "React",
    icon: <SiReact className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <RiNextjsFill className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "TailwindCSS",
    icon: <RiTailwindCssFill className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "Shadcn",
    icon: <SiShadcnui className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: <RiNodejsFill className="h-12 w-12 text-violet-500" />,
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-12 w-12 text-violet-500" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: nextjsStore,
    url: "https://nextjs-comfystore.vercel.app/",
    github: "https://github.com/wuyu621/nextjs-store",
    title: "Full Stack Next.js E-Commerce",
    text: "An intuitive shopping platform that lets users browse and filter products, leave reviews, set favorites, manage their shopping cart, and place orders. Admins can efficiently manage the product database. The app also offers a responsive design and dark mode for a personalized experience.",
    technologies:
      "Built by : Next.js | TypeScript | Tailwind CSS | Shadcn/ui | Clerk | Supabase | Prisma | Stripe",
  },
  {
    id: nanoid(),
    img: reactjsStore,
    url: "https://comfy-store-reactjs.netlify.app/",
    github: "https://github.com/wuyu621/Comfy-Store-ReactJS",
    title: "Furniture store using ReactJS",
    text: "A user-friendly platform to browse products, filter by various criteria, manage the shopping cart, and complete the checkout process. It features a responsive design for both desktop and mobile, with a customizable light/dark theme for a personalized experience.",
    technologies:
      "Built by : ReactJS | Tailwind CSS | React Query | Redux Toolkit | Daisy UI",
  },

  {
    id: nanoid(),
    img: ahaEvents,
    url: "https://ahaevents.netlify.app/",
    github: "https://github.com/wuyu621/ahaevents",
    title: "Party Balloons & Event Services",
    text: "A multi-page website offering a seamless experience for browsing party balloons decorations and event services. Features include product listings, service packages, a gallery of past events, and a contact form for inquiries and bookings. The site is fully responsive for optimal viewing on all devices.",
    technologies: "Built by : ReactJS | React Router | CSS",
  },
  {
    id: nanoid(),
    img: todolist,
    url: "https://claire-todolist.netlify.app",
    github: "https://github.com/wuyu621/cliare-todolist",
    title: "pika todo list",
    text: "A simple to-do list app designed for kids, allowing them to add, delete, and mark tasks as completed. The app features fun cartoon characters and, upon completing a list, an encouraging cartoon character pops up to celebrate their progress.",
    technologies: "Built by : ReactJS | CSS",
  },
  {
    id: nanoid(),
    img: colorGenerate,
    url: "https://color-generate-reactapp.netlify.app/",
    github: "https://github.com/wuyu621/color-generate",
    title: "Color Palette Generate App",
    text: "An interactive web app that lets users generate color palettes from a single input color or by selecting from a color block. Users can easily explore tints and shades, and copy any color directly to their clipboard.",
    technologies: "Built by : ReactJS | CSS",
  },
  {
    id: nanoid(),
    img: menu,
    url: "https://ourmenu-reactapp.netlify.app/",
    github: "https://github.com/wuyu621/menu",
    title: "Menu SPA",
    text: "A single-page website that showcases a variety of menu items, allowing users to browse and filter seamlessly. Built with ReactJS for dynamic content updates, it is fully optimized for desktops, tablets, and mobile devices.",
    technologies: "Built by : ReactJS | CSS",
  },
  {
    id: nanoid(),
    img: backroads,
    url: "https://backroads-tripadviser.netlify.app/",
    github: "https://github.com/wuyu621/backroads-tripadviser",
    title: "Tripadviser SPA",
    text: "A single-page website offering information about active travel services, featured tours, and pricing details.",
    technologies: "Built by : ReactJS | HTML | CSS",
  },
  {
    id: nanoid(),
    img: simongame,
    url: "https://simongame-retrostyle.netlify.app/",
    github: "https://github.com/wuyu621/simongame",
    title: "simon game",
    text: "A fun, interactive version of the classic Simon game, featuring pixelated graphics and retro-style design. Try it out and enjoy the nostalgic challenge!",
    technologies: "Built by : JavaScript | JQuery | HTML | CSS",
  },
  {
    id: nanoid(),
    img: dicegame,
    url: "https://dicegame-2players.netlify.app/",
    github: "https://github.com/wuyu621/dicegame",
    title: "Dice Game for Two Players",
    text: "A simple and fun dice game for two players. Try it out—maybe you can use it to decide who does the chores tonight or who's treating for lunch today!",
    technologies: "Built by :JavaScript | HTML | CSS",
  },
];
