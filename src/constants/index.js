
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import { bardBox, leafDrive } from "../assets/images";

export const skills = [
    
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];

export const experiences = [
    
    {
        title: "Web Developer",
        company_name: "BardBox IT Solutions",
        icon: bardBox,
        iconBg: "#b7e4c7",
        date: "June 2025 - Sep 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
    title: "MERN Stack Developer Intern",
    company_name: "LeafDrive IT Solutions",
    icon: leafDrive,
    iconBg: "#ffff",
    date: "Jan 2026 - Present",
    points: [
        "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
        "Designing and developing RESTful APIs and integrating them with frontend applications.",
        "Implementing authentication and authorization using JWT and role-based access control.",
        "Managing database schemas and optimizing queries in MongoDB for better performance.",
        "Deploying applications on cloud platforms and handling version control using Git and GitHub.",
        "Collaborating with senior developers to debug, test, and improve application scalability and security."
    ],
},
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Vraj-V',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gecdhd-comp-vraj-valand/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'Developed a web application that tracks and notifies about there expenses. User are able to set budgets and get insights on their spending habits. For now user has put their expenses manually but in future we are planning to integrate it with bank accounts for automatic tracking and with AI Agent to track the purchase and there catergioes',
        link: '',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'CyberAttack Simulation',
        description: 'Created a full-stack application for simulating and analyzing cyberAttacks in a controlled environment.',
        link: 'https://github.com/Vraj-V/CyberRangeSimulator',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Nova Voice Assistant',
        description: 'Built a voice assistant that can perform various tasks such as setting reminders, providing weather updates, and answering general questions using natural language processing and machine learning algorithms.',
        link: 'https://github.com/Vraj-V/Jarvis-Advanced-Ai',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'ToDo List Application with AI Integration',
        description: 'Built a todo list application with AI integration that can prioritize tasks, suggest due dates, and provide insights on productivity.',
        link: 'https://github.com/Vraj-V/3D-ToDOList_BOT',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Drive AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from img or pdf. Ideal for students, professionals, and anyone seeking quick insights from lengthy documents.',
        link: 'https://github.com/Vraj-V/Drive-Backend--WithSupabase',
    }
];