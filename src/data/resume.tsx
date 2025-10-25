import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "DRUVA",
  initials: "K R",
  url: "https://druva.vercel.app",
  location: "Electronic City, Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/ElectronicCity,Bangalore",
  description:
    "Computer Science student with a passion for coding and problem-solving. Experienced in Full-Stack Development.",
  summary:
    "Hi there, I'm Druva, a dedicated CS student with a passion for coding, and problem-solving. I thrive on challenges, continuously pushing my limits to grow, often diving into the deep rabbit holes of CTFs where I thrive... I enjoy collaborating with others, adapting to new challenges, and learning new stuff. As an avid tech reader, I stay up-to-date with the latest trends and emerging technologies. I hope to leverage my skills and creativity to drive meaningful innovation and make a lasting impact in the tech world.",
  avatarUrl: "/images/me.avif",
  skills: [
    "NextJS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "C",
    "C++",
    "Java",
    "Docker",
    "Vercel",
    "Render",
    "AWS EC2",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "druvagayithri@gmail.com",
    tel: "+91 8123685938",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/K-R-DRUVA",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/k-r-druva-4b5b2430a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:druvagayithri@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "Resume/K_R_Druva_Resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Zemblance Hydrocarbons – IIT Madras (Remote)",
      href: "https://digitalskills.iitmpravartak.org.in/zemblance.php",
      badges: [],
      location: "Remote",
      title: "AI/ML Intern – Energy Industry",
      logoUrl: "/images/zemblance.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Prototyped and benchmarked AI models for power demand forecasting using real-world datasets. Collaborated with professors, engineers, and PhD researchers across domains. Analyzed confidential energy data ensuring zero data leaks. Built a product that visualizes stress–strain plots from uploaded data and predicts the point of material failure.",
    },
    {
      company: "Kodivian Technologies",
      href: "https://kodivian.com",
      badges: [],
      location: "Bangalore, Karnataka",
      title: "Product Developer Intern",
      logoUrl: "/images/kodivian.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Built core backend for internal low-code/no-code platform used by enterprise clients. Deployed SCANIFY, reducing document processing time by 60% via intelligent parsing. Designed scalable Python APIs and optimized SQLite queries for multi-user workflows. Worked on confidential product pipelines under NDA.",
    },
    {
      company: "Centre for Computer Network and Security, Bengaluru",
      href: "https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/",
      badges: [],
      location: "Bengaluru, Karnataka",
      title: "Research Intern",
      logoUrl: "/images/ccncs.jpg",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Built malware detector with 94% accuracy using static + heuristic analysis. Trained XGBoost and Random Forest classifiers on 1.2K malware samples. Presented paper at APIT 2025 as Sole Indian delegate.",
    },
    {
      company: "IEEE PES University Student Branch",
      href: "https://pes.edu",
      badges: [],
      location: "Bangalore, Karnataka",
      title: "Technical Head",
      logoUrl: "/images/IEEE.jpg",
      start: "Jun 2023",
      end: "Aug 2025",
      description:
        "Led team of 24 for Kalpana 2023/24 hackathon with over 300+ national participants. Designed challenges and co-managed deployment for 5 cybersecurity challenges/CTFs ensuring 99.9% uptime. Improved participant engagement by 40% via robust technical feedback loops.",
    },
  ],
  
  education: [
    {
      school: "PES University",
      href: "https://pes.edu",
      degree: "Bachelor of Technology, Computer Science ",
      logoUrl: "/images/pesu.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: " Decentralized Voting System",
      href: "https://github.com/K-R-DRUVA/ChainCitadel",
      active: true,
      description:
        "Built Solidity smart contracts with 100% test coverage to ensure election integrity. Implemented ERC-721 based voter authentication to reduce unauthorized access and improve voter verification. Reduced gas fees by 35% through optimized smart contract design.",
      technologies: ["Solidity", "Hardhat", "Ethereum", "JavaScript", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/K-R-DRUVA/ChainCitadel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/ChainCitadel.png",
    },
    {
      title: "Emotion-Driven Storyteller",
      href: "https://github.com/BITSHC-Hackathon/emotion-driven-storyteller",
      active: true,
      description:
        "Built narration pipeline using RoBERTa and DistilBERT achieving 91% sentiment accuracy. Reduced latency to sub-2s and memory usage by 45% using FastAPI and caching. ",
      technologies: ["Python", "FastAPI", "Transformers", "RoBERTa", "DistilBERT", "ElevenLabs API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BITSHC-Hackathon/emotion-driven-storyteller",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/emotion.png",
    },
    {
      title: "Personal Financial Advisor",
      href: "https://github.com/K-R-DRUVA/BLACKSITE",
      active: true,
      description:
        "Developed a MERN-based personal financial advisor that helps users manage budgets, track expenses, and visualize investment growth. Integrated AI-driven insights and authentication for secure and intelligent financial recommendations.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/K-R-DRUVA/BLACKSITE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/BLacksite.webp",
    },
  ],
  
} as const;