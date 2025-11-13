import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Prabhjot Singh Chadha",
    initials: "PSC",
    url: "https://prabhjotsinghchadha.com",
    location: "MP, India",
    locationLink: "https://www.google.com/maps/place/madhyapradesh",
    description:
        "Fractional CTO & SAAS Expert with 8 years of experience in full-stack development, payment integrations, and digital innovation.",
    summary:
        "Fractional CTO & SAAS Expert with 8 years of experience in full-stack development, payment integrations, and digital innovation. Friendly and pragmatic Fractional CTO helping startups and growing teams make smarter technology decisions. I help bridge business goals with technical strategy to deliver scalable, efficient solutions. At FPS Lounge, led a cross-functional team, boosting user engagement by 40% in just six months. Expert in Next.js, Node.js, TypeScript, Firebase, Unity game development, and digital art creation. Specialized in remote work with a professional home office setup, delivering high-quality solutions for clients worldwide.",
    avatarUrl: "/me.jpeg",

    // Professional Stats
    stats: {
        yearsOfExperience: 8,
        projectsCompleted: 50,
        clientsSatisfied: 25,
        teamMembersLed: 15,
    },

    // Achievements & Certifications
    achievements: [
        {
            title: "Smart India Hackathon Winner",
            year: "2018",
            description: "1st Place Winner for IoT-based smart electric meter solution",
            icon: "🏆",
        },
        {
            title: "40% User Engagement Boost",
            year: "2024",
            description: "Led FPS Lounge platform optimization resulting in significant growth",
            icon: "📈",
        },
        {
            title: "Cross-functional Team Leadership",
            year: "2023-2025",
            description: "Successfully managed and mentored 15+ developers and designers",
            icon: "👥",
        },
    ],

    // Testimonials
    testimonials: [
        {
            name: "Derek Taing",
            role: "CEO at FPS Lounge",
            content:
                "Prabhjot's technical expertise and leadership skills are exceptional. He delivered our project ahead of schedule with outstanding quality.",
            avatar: "/testimonial-1.jpg",
        },
        {
            name: "Paul Chris Luke",
            role: "Founder at PCL Labs",
            content:
                "Working with Prabhjot was a game-changer. His strategic thinking and technical implementation transformed our platform.",
            avatar: "/testimonial-2.jpg",
        },
    ],

    // Remote Work Setup
    workSetup: {
        workStyle: "100% Remote",
        description:
            "Professional home office with cutting-edge equipment for maximum productivity",
        equipment: [
            {
                category: "Computing",
                items: [
                    {
                        name: "MacBook Pro M4 Max",
                        description: "Latest Apple Silicon for peak performance",
                    },
                    {
                        name: "32GB Unified Memory",
                        description: "Seamless multitasking and development",
                    },
                ],
            },
            {
                category: "Displays",
                items: [
                    {
                        name: '2x Apple Studio Display 32"',
                        description: "Dual 5K Retina displays for enhanced productivity",
                    },
                    {
                        name: "iPad Pro with Apple Pencil",
                        description: "Digital art creation and design work",
                    },
                ],
            },
            {
                category: "Peripherals",
                items: [
                    {
                        name: "Keychron K2 Mechanical Keyboard",
                        description: "Premium typing experience",
                    },
                    {
                        name: "Professional Lighting Setup",
                        description: "Optimal lighting for video calls",
                    },
                    {
                        name: "Ergonomic Workspace",
                        description: "Comfortable and productive environment",
                    },
                ],
            },
        ],
    },

    // Services offered
    services: [
        {
            title: "Full-Stack Development",
            description: "End-to-end web application development using modern technologies",
            icon: "💻",
            technologies: ["React", "Next.js", "Node.js", "TypeScript"],
        },
        {
            title: "SAAS Development",
            description: "Complete SAAS platform development with subscription management",
            icon: "🚀",
            technologies: [
                "SAAS Architecture",
                "Multi-tenancy",
                "Subscription Models",
                "Analytics",
            ],
        },
        {
            title: "Payment Integration",
            description: "Secure payment processing and e-commerce solutions",
            icon: "💳",
            technologies: ["Stripe", "PayPal", "Payment Gateways", "E-commerce"],
        },
        {
            title: "Game Development",
            description: "Interactive game development and immersive experiences",
            icon: "🎮",
            technologies: ["Unity", "C#", "Game Design", "Mobile Games"],
        },
        {
            title: "Digital Art & Design",
            description: "Creative digital artwork and UI/UX design using professional tools",
            icon: "🎨",
            technologies: [
                "Procreate",
                "Digital Illustration",
                "UI/UX Design",
                "Creative Direction",
            ],
        },
        {
            title: "Cloud Architecture",
            description: "Scalable cloud solutions and infrastructure design",
            icon: "☁️",
            technologies: ["GCP", "Firebase", "Docker", "Kubernetes"],
        },
        {
            title: "Team Leadership",
            description: "Technical team management and strategic planning",
            icon: "🎯",
            technologies: ["Agile", "Scrum", "Mentoring", "Strategic Planning"],
        },
        {
            title: "Performance Optimization",
            description: "Application performance tuning and scalability improvements",
            icon: "⚡",
            technologies: ["Performance Audits", "SEO", "Core Web Vitals", "Optimization"],
        },
    ],
    skills: [
        "Next.js",
        "React.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "SAAS Development",
        "Stripe Integration",
        "PayPal Integration",
        "Unity Game Engine",
        "C# Programming",
        "Digital Art (Procreate)",
        "UI/UX Design",
        "Deno",
        "Docker",
        "Github",
        "Gitlabs",
        "Redux",
        "Xstate",
        "GCP",
        "Firebase",
        "Strategic Planning",
        "Mentoring Teams",
        "Remote Work Expert",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "prabhjottechs@gmail.com",
        tel: "+91 8871143770",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/prabhjotsinghchadha",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/mrprabhjot/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://twitter.com/tweet_prabhjot",
                icon: Icons.x,
                navbar: true,
            },
            Discord: {
                name: "Discord",
                url: "https://discord.gg/7KeTc29CEd",
                icon: Icons.discord,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:prabhjottechs@gmail.com",
                icon: Icons.email,
                navbar: false,
            },
        },
    },

    work: [
        {
            company: "FPS Lounge",
            href: "https://fpslounge.com",
            badges: [],
            location: "Remote",
            title: "Fractional CTO",
            logoUrl: "/fpslounge.png",
            start: "March 2023",
            end: "July 2025",
            description:
                "Started as Senior Lead Engineer and was promoted to Fractional CTO. Single-handedly built the entire platform from scratch—initially on WordPress, then migrated to React, and later Next.js for performance and scalability. Developed the backend using Firebase & Google Cloud Platform (GCP), ensuring a robust and scalable infrastructure. Created a thriving platform where thousands of gamers book coaching sessions and earn money. Played a key role in talking to angel investors, helping secure funding and drive growth.",
        },
        {
            company: "Upwork",
            badges: [],
            href: "https://upwork.com",
            location: "Remote",
            title: "Freelancer",
            logoUrl: "/upwork.svg",
            start: "September 2021",
            end: "February 2023",
            description:
                "Implemented successful e-commerce solutions for long-term clients, resulting in a significant increase in online sales and customer engagement. Led the development and launch of the cryptocurrency project Phuntoken. Consistently exceeded client expectations by delivering high-quality results on various projects, including those for clients Gumballpoodle, Browtricks, Phunware. Demonstrated ability to work effectively with cross-functional teams to meet tight deadlines and deliver projects within budget.",
        },
        {
            company: "L&T Technology Services",
            href: "https://ltts.com/",
            badges: [],
            location: "Mysore",
            title: "Software Engineer",
            logoUrl: "/ltts.png",
            start: "July 2018",
            end: "August 2021",
            description:
                "Led the development of various successful projects at L&T, resulting in increased efficiency and productivity for the company. Experience in building both frontend & backend, data services and Microservices at scale. Experience leading and architecting major new enhancements. Strong understanding of web services and best practices. Strong experience with managing the security aspects. AWS devops skills using ECS and Docker. Nodejs, ExpressJS, ASP.NET MVC, MSSQL. Hands-On Experience on Restful API Integration.",
        },
    ],
    education: [
        {
            school: "Oriental Institute of Science & Technology",
            href: "https://orientaliti.org",
            degree: "B.E in Information Technology",
            logoUrl: "/oist.png",
            start: "April 2014",
            end: "May 2018",
        },
    ],
    projects: [
        {
            title: "FPS Lounge Platform",
            href: "https://fpslounge.com",
            dates: "March 2023 - July 2025",
            active: true,
            description:
                "Single-handedly built the entire platform from scratch—initially on WordPress, then migrated to React, and later Next.js for performance and scalability. Created a thriving platform where thousands of gamers book coaching sessions and earn money. Launched a highly successful course program, starting with HisWattson (a top Twitch celebrity), which led to massive sales. Expanded the platform by bringing in multiple pro gamers to offer courses in various games.",
            technologies: [
                "Next.js",
                "React",
                "TypeScript",
                "Firebase",
                "Google Cloud Platform",
                "WordPress",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://fpslounge.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/portfolio/fps.png",
            video: "",
        },
        {
            title: "Phuntoken Cryptocurrency",
            href: "https://phuntoken.com",
            dates: "September 2021 - February 2023",
            active: false,
            description:
                "Led the development and launch of this cryptocurrency project while working as a freelancer. Implemented blockchain integration, wallet functionality, and secure transaction systems. The project involved both frontend and backend development with a focus on security and scalability.",
            technologies: [
                "Blockchain",
                "Web3.js",
                "Solidity",
                "JavaScript",
                "React",
                "Node.js",
                "AWS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://phuntoken.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/portfolio/phuntoken.png",
            video: "",
        },
        {
            title: "Paul Chris Luke E-commerce",
            href: "https://www.paulchrisluke.com",
            dates: "September 2021 - February 2023",
            active: false,
            description:
                "Implemented successful e-commerce solutions for this long-term client, resulting in a significant increase in online sales and customer engagement. Redesigned the entire shopping experience, improved checkout flow, and implemented analytics to drive data-based improvements.",
            technologies: [
                "Next.js",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Firebase",
                "Shopify API",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://www.paulchrisluke.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/portfolio/pcl.png",
            video: "",
        },
        {
            title: "Gumballpoodle Shopify CRO",
            href: "https://www.gumballpoodle.com",
            dates: "October 2021 - August 2022",
            active: false,
            description:
                "Performed extensive Conversion Rate Optimization (CRO) for this Shopify store. Implemented A/B testing, redesigned product pages, optimized site speed, and enhanced mobile shopping experience. These improvements led to a 35% increase in conversion rate.",
            technologies: [
                "Shopify",
                "JavaScript",
                "Liquid",
                "CSS",
                "Google Analytics",
                "A/B Testing",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://www.gumballpoodle.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/portfolio/gumballpoodle.png",
            video: "",
        },
        {
            title: "Fiveable Education Platform",
            href: "https://fiveable.me",
            dates: "December 2021 - June 2022",
            active: false,
            description:
                "Contributed to the development of this education platform focused on helping students prepare for AP exams. Implemented interactive study tools, content delivery systems, and performance analytics dashboards. Enhanced user engagement and study effectiveness.",
            technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS", "D3.js"],
            links: [
                {
                    type: "Website",
                    href: "https://fiveable.me",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/portfolio/fiveable.png",
            video: "",
        },
    ],
    hackathons: [
        {
            title: "Smart India Hackathon Winner",
            dates: "April 5th, 2018",
            location: "Bhopal, India",
            win: "1st Place Winner",
            description:
                "Developed Eliot - a smart prepaid electric meter based on the Internet of Things (IoT). The device helped optimize power consumption by monitoring real-time usage, leading to significant energy savings. This project was recognized as a game-changer for the energy sector.",

            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "IBM Hackathon",
            dates: "June 27th, 2018",
            location: "Bengaluru, India",
            description:
                "Built an AI-powered tool using IBM Watson that leveraged image detection to recognize circuit board defects in real-time. This innovation helped reduce manufacturing errors and improve hardware quality control in production lines.",

            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "L&T Technology Services Hackathon",
            dates: "Feb 16th, 2019",
            location: "Mysuru, India",
            description:
                "Created a smart dashboard alert system for detecting and reporting server room activities. The system enhanced security by providing instant notifications of unauthorized access or unusual environmental conditions.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "L&T Technology Services Hackathon",
            dates: "August 16th, 2020",
            location: "Mysuru, India",
            description:
                "Developed a COVID-19 employee tracking system to monitor and trace affected employees within L&T offices. The tool provided insights to management, ensuring safer work environments and effective containment strategies.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
    ],
} as const;
