export const personalInfo = {
    name: "Sudip",
    title: "Full Stack JavaScript Developer",
    tagline: "Building modern web experiences with React, Next.js & Node.js",
    bio: "I'm a passionate Full Stack JavaScript Developer with hands-on experience building scalable web applications using the MERN stack, Next.js, and NestJS. I enjoy working across the entire stack — from crafting pixel-perfect UIs to designing robust REST APIs and database schemas.",
    email: "sudippaudel6561@gmail.com",
    github: "https://github.com/sudip-gt",
    linkedin: "https://www.linkedin.com/in/sudip-paudel-78537b289",
    cvUrl: "/cv.pdf",
};

export const devIconMap: Record<string, string> = {
    "HTML5": "devicon-html5-plain colored",
    "CSS3": "devicon-css3-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "TypeScript": "devicon-typescript-plain colored",
    "React": "devicon-react-original colored",
    "Next.js": "devicon-nextjs-plain",
    "Redux Toolkit": "devicon-redux-original colored",
    "Tailwind CSS": "devicon-tailwindcss-plain colored",
    "Node.js": "devicon-nodejs-plain colored",
    "Express.js": "devicon-express-original",
    "NestJS": "devicon-nestjs-plain colored",
    "MongoDB": "devicon-mongodb-plain colored",
    "PostgreSQL": "devicon-postgresql-plain colored",
    "MySQL": "devicon-mysql-plain colored",
    "Prisma": "devicon-prisma-original",
    "Git": "devicon-git-plain colored",
    "GitHub": "devicon-github-original",
    "Docker": "devicon-docker-plain colored",
    "REST APIs": "devicon-fastapi-plain colored",
    "Mongoose": "devicon-mongoose-original colored",
    "Cloudinary": "devicon-cloudinary-plain colored",
    "Supabase": "devicon-supabase-plain colored",
};

export const techStack = {
    frontend: [
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Redux Toolkit", icon: "redux" },
        { name: "Tailwind CSS", icon: "tailwind" },
    ],
    backend: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "NestJS", icon: "nestjs" },
        { name: "REST APIs", icon: "api" },
    ],
    database: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "Prisma", icon: "prisma" },
        { name: "Mongoose", icon: "mongoose" },
    ],
    tools: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Cloudinary", icon: "cloudinary" },
        { name: "Supabase", icon: "supabase" },
    ],
};

export const projects = [
    {
        id: 1,
        title: "Library Task Manager",
        description:
            "A full-stack library management system with secure JWT auth, Stripe-powered borrowing payments, automated return task tracking, and an admin dashboard for books and stats.",
        techStack: ["React", "TypeScript", "Express.js", "MongoDB", "Mongoose", "Redux Toolkit", "Tailwind CSS", "Stripe"],
        githubUrl: "https://github.com/Sudip-gt/LibraryTaskManager",
        liveUrl: "https://library-task-manager.vercel.app/",
        category: "fullstack",
    },
    {
        "id": 2,
        "title": "CLI Note Manager",
        "description": "A lightweight command-line note management tool built with Node.js. Features include adding notes with unique IDs and timestamps, paginated listing for performance, and an event loop demonstration. Stores data in JSON for simplicity and portability.",
        "techStack": ["Node.js", "JavaScript", "fs", "crypto", "path"],
        "githubUrl": "https://github.com/Sudip-gt/day22_noteManager",
        "liveUrl": null,
        "category": "cli"
    },
    {
        id: 3,
        title: "Developer Portfolio",
        description:
            "A modern, responsive portfolio website built with Next.js App Router and Tailwind CSS. Features smooth animations, dark theme, SEO optimization, and a contact form.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://yourportfolio.vercel.app",
        category: "fullstack",
    },
    {
        id: 4,
        title: "Drag & Drop TODO App",
        description:
            "A feature-rich TODO application with drag-and-drop task reordering, priority labels, and persistent storage via localStorage. Clean UI with smooth interactions.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "localStorage"],
        githubUrl: "https://github.com/yourusername/todo-app",
        liveUrl: "https://todo-app-demo.vercel.app",
        category: "frontend",
    },
    {
        id: 6,
        title: "Profile Management System",
        description:
            "A full-stack profile management system with user authentication, profile photo upload via Cloudinary, and CRUD operations. Built with a NestJS backend and React frontend.",
        techStack: ["React", "NestJS", "MongoDB", "Cloudinary", "JWT"],
        githubUrl: "https://github.com/yourusername/profile-management",
        liveUrl: null,
        category: "fullstack",
    },
];

export const experience = [
    {
        id: 1,
        role: "Associate Software Engineer",
        organization: "CloudTech",
        period: "Sep 2025 - Present · 8 mos",
        description:
            "Working as a full-stack developer specializing in the MERN stack to build scalable web applications.",
        highlights: [
            "Developed full-stack web applications using JavaScript and MongoDB",
            "Collaborated with cross-functional teams to deliver high-quality software solutions",
        ],
    },
    {
        id: 2,
        role: "MERN Intern",
        organization: "CloudTech",
        period: "May 2025 - Sep 2025 · 5 mos",
        description:
            "Internship focused on learning and applying MERN stack technologies in real-world projects.",
        highlights: [
            "Gained hands-on experience with React.js and Node.js",
            "Worked on database design and API development with MongoDB",
        ],
    },
    {
        id: 3,
        role: "STEAM Officer",
        organization: "Community Organization",
        period: "2022 – Present",
        description:
            "Facilitated STEAM (Science, Technology, Engineering, Art, Mathematics) programs and workshops for students. Mentored young learners in technology and programming fundamentals.",
        highlights: [
            "Organized and led tech workshops for 50+ students",
            "Introduced programming concepts using hands-on projects",
            "Coordinated with educators to integrate STEAM into curriculum",
        ],
    },
    {
        id: 4,
        role: "Self-Taught Full Stack Developer",
        organization: "Independent Learning",
        period: "2021 – Present",
        description:
            "Committed to continuous learning and staying current with modern web development technologies. Built multiple projects to solidify skills across the full stack.",
        highlights: [
            "Mastered MERN stack (MongoDB, Express.js, React, Node.js)",
            "Learned Next.js App Router, Server Components and Server Actions",
            "Explored NestJS for scalable backend architecture",
            "Practiced Docker containerization and deployment workflows",
        ],
    }
];

export const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Docs", href: "#documentation" },
    { label: "Contact", href: "#contact" },
];

export const documentation = [
    {
        id: "overview",
        title: "Project Overview",
        summary:
            "A statically-rendered, single-page portfolio built with the Next.js 16 App Router. All copy lives in one typed data module so the site can be updated without touching components.",
        bullets: [
            "Next.js 16 App Router with React 19 server + client components",
            "Tailwind CSS v4 with CSS variables driving the dark theme",
            "Framer Motion for entrance animations and the projects modal",
            "Single source of truth in src/data/portfolio.ts",
        ],
    },
    {
        id: "architecture",
        title: "Architecture",
        summary:
            "The home page composes section components in a fixed order. A floating navbar, footer, and command palette wrap every page through the root layout.",
        bullets: [
            "src/app/layout.tsx — global metadata, fonts, Navbar, Footer, CommandPaletteProvider",
            "src/app/page.tsx — composes Hero → About → TechStack → Projects → Experience → Docs → Contact",
            "src/components/sections/* — one file per landing-page section",
            "src/app/api/contact/route.ts — server route that validates with Zod and sends mail via Resend",
        ],
    },
    {
        id: "customize",
        title: "Customizing Content",
        summary:
            "Almost everything on the page — name, bio, projects, experience, navigation links — is sourced from src/data/portfolio.ts. Edit that file, save, and the UI reflects it instantly.",
        bullets: [
            "personalInfo — name, title, tagline, bio, social URLs, CV link",
            "techStack — grouped frontend / backend / database / tools entries",
            "projects — id, title, description, techStack, githubUrl, liveUrl, category",
            "experience — chronological work and learning history with highlights",
        ],
    },
    {
        id: "contact",
        title: "Contact Form & Email",
        summary:
            "The contact form is React Hook Form + Zod on the client, submitted to /api/contact, which validates again and dispatches a styled email through Resend.",
        bullets: [
            "Schema lives in src/lib/contactSchema.ts — shared between client and server",
            "Hook in src/hooks/useContactForm.ts wraps submit + toast feedback",
            "Set RESEND_API_KEY, PERSONAL_EMAIL, PERSONAL_NAME in .env.local",
            "Swap the from address once you verify a custom domain in Resend",
        ],
    },
    {
        id: "tooling",
        title: "Tooling & Scripts",
        summary:
            "Node version is pinned with mise so contributors get a reproducible environment. npm scripts cover the day-to-day workflow.",
        bullets: [
            "mise install — installs the Node version pinned in mise.toml",
            "npm run dev — start the local dev server on http://localhost:3000",
            "npm run lint — run ESLint with the Next.js config",
            "npm run build && npm start — produce and serve a production build",
        ],
    },
    {
        id: "deploy",
        title: "Deployment",
        summary:
            "The site is a standard Next.js app and deploys cleanly to Vercel. Any platform that supports Node 20+ and Next.js 16 will also work.",
        bullets: [
            "Push to GitHub and import the repo into Vercel",
            "Add RESEND_API_KEY, PERSONAL_EMAIL, PERSONAL_NAME as environment variables",
            "Set the production domain so Open Graph / canonical URLs resolve correctly",
            "Update metadataBase in src/app/layout.tsx to your real domain",
        ],
    },
];

