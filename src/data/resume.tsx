import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "MD Refat Rahman",
  initials: "RR",
  url: "https://github.com/mdrefatrahman",
  location: "Cambridge, UK",
  locationLink: "https://www.google.com/maps/place/Cambridge,+UK",
  description:
    "Full-Stack Developer and MSc Computer Science student in Cambridge, UK. Specializing in scalable web applications, backend engineering, REST APIs, and AI/ML solutions.",
  summary:
    "I'm a Computer Science graduate and Full-Stack Developer currently pursuing an MSc in Computer Science at Anglia Ruskin University, Cambridge, UK. I enjoy designing and building scalable web applications, backend systems, REST APIs, data-driven applications, and intelligent software solutions. My experience spans modern web development, databases, cloud/deployment workflows, and machine learning.",
  avatarUrl: "/me.webp",
  ogImage: "/og_image.webp",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills & Technologies" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Featured Projects",
      text: "I build practical software solutions with clean code, scalable architecture, and a strong focus on real-world usability. Here are some of my key projects.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "Gallery",
    },
    hackathons: {
      order: 7, enabled: true,
      label: "Certifications",
      heading: "Professional Certifications & Training",
      text: "Verified credentials and specialized industry certifications in web architecture, databases, and software development.",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Interested in collaborating or discussing opportunities? Feel free to reach out via GitHub, LinkedIn, or send an email.",
    },
  },
  photos: [
    { src: "/photos/refat1.jpg", alt: "Photo 1" },
    { src: "/photos/refat2.jpg", alt: "Photo 2" },
    { src: "/photos/refat3.jpg", alt: "Photo 3" },
    { src: "/photos/refat4.jpg", alt: "Photo 4" },
    { src: "/photos/refat5.jpg", alt: "Photo 5" },
    { src: "/photos/refat6.jpg", alt: "Photo 6" },
    { src: "/photos/refat7.jpg", alt: "Photo 7" },
    { src: "/photos/refat8.jpg", alt: "Photo 8" },
    { src: "/photos/refat9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Typescript },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Django", icon: Python },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: Postgresql },
    { name: "SQLite", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Machine Learning (LSTM/CNN)", icon: Python },
    { name: "Deep Learning & AI", icon: Python },
    { name: "Astro", icon: Astro },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "refatrahman.dev@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mdrefatrahman",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mdrefatrahman",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/refatrahman17",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:refatrahman17@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Fine Web Technology",
      href: "https://finewebtechnology.com",
      badges: ["Full-time"],
      location: "Kolkata, India",
      title: "Web Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=finewebtechnology.com&sz=128",
      start: "July 2022",
      end: "August 2023",
      description:
        "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and backend systems. Worked directly with client requirements, engineered reusable frontend components, troubleshot technical issues, and collaborated with cross-functional teams to deliver projects within strict deadlines.",
    },
  ],
  education: [
    {
      school: "Anglia Ruskin University",
      href: "https://aru.ac.uk",
      degree: "Master of Science - MSc, Computer Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=aru.ac.uk&sz=128",
      start: "2023",
      end: "Present",
    },
    {
      school: "Brainware University",
      href: "https://www.brainwareuniversity.ac.in",
      degree: "Bachelor of Technology - B.Tech, Computer Science Engineering (Grade: 7.83 / 10)",
      logoUrl: "https://www.google.com/s2/favicons?domain=brainwareuniversity.ac.in&sz=128",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Sensore — Graphene Trace",
      href: "https://github.com/refat17/sensore",
      dates: "Featured Project",
      active: true,
      description:
        "MedTech pressure-ulcer monitoring platform. A Django-based application designed to visualize and analyze high-resolution 32×32 pressure data collected from e-textile sensor mats with role-based dashboards, automated alerts, and PDF report generation.",
      technologies: [
        "Python",
        "Django",
        "SQLite",
        "HTML5 Canvas",
        "Chart.js",
        "Matplotlib",
        "xhtml2pdf",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/refat17/sensore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sensore.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Ecommerce Website Development",
      dates: "2022",
      location: "Webguru Infosystems",
      description:
        "Comprehensive certification covering full-stack e-commerce website architecture, OpenCart framework customization, PHP, MySQL database design, and secure payment integrations.",
      image: "https://www.google.com/s2/favicons?domain=webguru-india.com&sz=128",
      win: "Certified",
      links: [],
    },
    {
      title: "MongoDB Developer and Administrator",
      dates: "2022",
      location: "Skillip",
      description:
        "Professional training and certification on NoSQL document databases, indexing strategies, schema modeling, aggregation pipelines, and database administration.",
      image: "https://www.google.com/s2/favicons?domain=mongodb.com&sz=128",
      win: "Certified",
      links: [],
    },
  ],
} as const;
