import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import {
    Award,
    Calendar,
    Download,
    ExternalLink,
    Home,
    Laptop,
    Mail,
    MapPin,
    Monitor,
    Quote,
    Star,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Prabhjot Singh Chadha",
                            url: "https://prabhjotsinghchadha.com",
                            image: "https://prabhjotsinghchadha.com/me.jpeg",
                            description:
                                "Fractional CTO & SAAS Expert with 8 years of experience in full-stack development, payment integrations, and digital innovation.",
                            jobTitle: "Fractional CTO",
                            worksFor: {
                                "@type": "Organization",
                                name: "MariNation",
                                url: "https://marination.app",
                            },
                            address: {
                                "@type": "PostalAddress",
                                addressRegion: "Madhya Pradesh",
                                addressCountry: "IN",
                            },
                            email: "prabhjottechs@gmail.com",
                            telephone: "+91-8871143770",
                            sameAs: [
                                "https://github.com/prabhjotsinghchadha",
                                "https://linkedin.com/in/mrprabhjot/",
                                "https://twitter.com/tweet_prabhjot",
                                "https://discord.gg/7KeTc29CEd",
                            ],
                            knowsAbout: [
                                "Next.js",
                                "React",
                                "TypeScript",
                                "Node.js",
                                "SAAS Architecture",
                                "Stripe",
                                "Firebase",
                                "Google Cloud Platform",
                                "Unity",
                                "Full-Stack Development",
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Prabhjot Singh Chadha",
                            url: "https://prabhjotsinghchadha.com",
                            description:
                                "Portfolio of Prabhjot Singh Chadha — Fractional CTO & SAAS Expert",
                            author: {
                                "@type": "Person",
                                name: "Prabhjot Singh Chadha",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            name: "Prabhjot Singh Chadha — Fractional CTO Services",
                            url: "https://prabhjotsinghchadha.com",
                            description:
                                "Fractional CTO and full-stack engineering services: SAAS development, payment integrations, cloud architecture, and technical team leadership.",
                            provider: {
                                "@type": "Person",
                                name: "Prabhjot Singh Chadha",
                            },
                            areaServed: "Worldwide",
                            serviceType: [
                                "Fractional CTO",
                                "Full-Stack Development",
                                "SAAS Development",
                                "Payment Integration",
                                "Cloud Architecture",
                                "Technical Leadership",
                            ],
                        },
                    ]),
                }}
            />
            <section id="hero" className="relative py-8 overflow-hidden">
                {/* Floating Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
                </div>

                <div className="mx-auto w-full max-w-2xl space-y-8 relative">
                    <div className="gap-6 flex justify-between items-start">
                        <div className="flex-col flex flex-1 space-y-4">
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="text-xs font-medium">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {DATA.location}
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs">
                                        Available for work
                                    </Badge>
                                </div>
                            </BlurFade>
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY * 2}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text={`Hi, I'm `}
                            />
                            <div className="flex items-center gap-2">
                                <BlurFadeText
                                    delay={BLUR_FADE_DELAY * 2.5}
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                    yOffset={8}
                                    text={DATA.name.split(" ")[0]}
                                />
                                <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                                    <span className="text-3xl sm:text-5xl xl:text-6xl">👋</span>
                                </BlurFade>
                            </div>
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl text-muted-foreground leading-relaxed"
                                delay={BLUR_FADE_DELAY * 3}
                                text={DATA.description}
                            />

                            {/* Social Links */}
                            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                <div className="flex items-center gap-3 mt-6">
                                    {Object.entries(DATA.contact.social)
                                        .filter(([_, social]) => social.navbar)
                                        .map(([key, social]) => (
                                            <Tooltip key={key}>
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-muted hover:bg-muted/80 transition-all duration-200 p-2.5 rounded-full hover:scale-105"
                                                    >
                                                        <social.icon className="h-4 w-4" />
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>{social.name}</TooltipContent>
                                            </Tooltip>
                                        ))}
                                </div>
                            </BlurFade>

                            {/* CTA Buttons */}
                            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                                <div className="flex items-center gap-3 mt-8 flex-wrap">
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                                    >
                                        <Link href={`mailto:${DATA.contact.email}`}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            Get in Touch
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white"
                                    >
                                        <Link
                                            href="https://cal.com/prabhjot-singh-chadha"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Book a Meeting
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link
                                            href="https://drive.google.com/file/d/1aEKw3IQa4Ju_zckZ5KMQrEFcMsP9b0bX/view?usp=sharing"
                                            download
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Download CV
                                        </Link>
                                    </Button>
                                </div>
                            </BlurFade>
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-lg"></div>
                                <Avatar className="size-32 border-2 border-muted relative shadow-xl">
                                    <AvatarImage
                                        alt={DATA.name}
                                        src={DATA.avatarUrl}
                                        className="object-cover"
                                    />
                                    <AvatarFallback className="text-2xl font-bold">
                                        {DATA.initials}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </section>

            {/* Animated Stats Section */}
            <section id="stats" className="py-8">
                <BlurFade delay={BLUR_FADE_DELAY * 6}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    {DATA.stats.yearsOfExperience}+
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    Years Experience
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                                    {DATA.stats.projectsCompleted}+
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    Projects Completed
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                                    {DATA.stats.clientsSatisfied}+
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    Clients Satisfied
                                </div>
                            </div>
                        </div>
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">
                                    {DATA.stats.teamMembersLed}+
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    Team Members Led
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </section>

            <section id="about" className="bg-muted/30 -mx-6 px-6 py-12 rounded-2xl">
                <div className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                About Me
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <Markdown className="prose max-w-full text-pretty font-sans text-center text-muted-foreground dark:prose-invert mx-auto">
                            {DATA.summary}
                        </Markdown>
                    </BlurFade>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
                <div className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Skills & Expertise
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Technical Proficiency
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Technologies and tools I work with to bring ideas to life
                            </p>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {/* Frontend & SAAS */}
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">
                                    Frontend & SAAS
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["React.js", "Next.js", "TypeScript", "SAAS Development"].map(
                                        (skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                            >
                                                {skill}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </div>
                        </BlurFade>

                        {/* Payments & E-commerce */}
                        <BlurFade delay={BLUR_FADE_DELAY * 10}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">
                                    Payments & Cloud
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["Stripe", "PayPal", "Firebase", "GCP"].map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>

                        {/* Game Dev & Creative */}
                        <BlurFade delay={BLUR_FADE_DELAY * 11}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">
                                    Game Dev & Art
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["Unity", "C#", "Procreate", "UI/UX Design"].map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>

                        {/* Leadership & Remote */}
                        <BlurFade delay={BLUR_FADE_DELAY * 12}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">
                                    Leadership & Remote
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {[
                                        "Team Leadership",
                                        "Remote Work",
                                        "Strategic Planning",
                                        "Mentoring",
                                    ].map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 12}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Services
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">What I Offer</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive solutions to transform your ideas into reality
                            </p>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {DATA.services.map((service, index) => (
                            <BlurFade
                                key={service.title}
                                delay={BLUR_FADE_DELAY * 13 + index * 0.1}
                            >
                                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mx-4 mt-4">
                                            <div className="text-3xl">{service.icon}</div>
                                            <div>
                                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </CardTitle>
                                                <CardDescription className="mt-1">
                                                    {service.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mx-4 mb-4">
                                            {service.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Remote Work Setup Section */}
            <section id="remote-setup" className="bg-muted/30 -mx-6 px-6 py-16 rounded-2xl">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 15}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                <Home className="w-3 h-3 mr-1" />
                                Remote Work Setup
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Professional Home Office
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                {DATA.workSetup.description}
                            </p>
                            <Badge className="bg-green-600 hover:bg-green-700 mt-4">
                                🌍 {DATA.workSetup.workStyle}
                            </Badge>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {DATA.workSetup.equipment.map((category, index) => (
                            <BlurFade
                                key={category.category}
                                delay={BLUR_FADE_DELAY * 16 + index * 0.1}
                            >
                                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm">
                                    <CardHeader className="text-center">
                                        <div className="flex items-center justify-center mb-3">
                                            {category.category === "Computing" && (
                                                <Laptop className="w-8 h-8 text-blue-500" />
                                            )}
                                            {category.category === "Displays" && (
                                                <Monitor className="w-8 h-8 text-purple-500" />
                                            )}
                                            {category.category === "Peripherals" && (
                                                <Zap className="w-8 h-8 text-green-500" />
                                            )}
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                            {category.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {category.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="border-l-2 border-primary/20 pl-4 hover:border-primary/50 transition-colors"
                                            >
                                                <h4 className="font-semibold text-sm">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>

                    <BlurFade delay={BLUR_FADE_DELAY * 17}>
                        <div className="text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 px-6 py-3 rounded-full border">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">
                                    Available for Remote Projects Worldwide
                                </span>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <section id="work">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 12}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Career
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                My professional journey and key contributions
                            </p>
                        </div>
                    </BlurFade>

                    <div className="space-y-6">
                        {DATA.work.map((work, id) => (
                            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
                                <div className="group hover:bg-muted/50 transition-colors duration-200 p-4 rounded-xl -mx-4">
                                    <ResumeCard
                                        key={work.company}
                                        logoUrl={work.logoUrl}
                                        altText={work.company}
                                        title={work.company}
                                        subtitle={work.title}
                                        href={work.href}
                                        badges={work.badges}
                                        period={`${work.start} - ${work.end ?? "Present"}`}
                                        description={work.description}
                                    />
                                </div>
                                {id < DATA.work.length - 1 && <Separator className="my-6" />}
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="education" className="bg-muted/30 -mx-6 px-6 py-12 rounded-2xl">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Education
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Academic Background
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Foundation of my technical knowledge and expertise
                            </p>
                        </div>
                    </BlurFade>

                    <div className="space-y-6">
                        {DATA.education.map((education, id) => (
                            <BlurFade
                                key={education.school}
                                delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                            >
                                <div className="group hover:bg-background/50 transition-colors duration-200 p-4 rounded-xl -mx-4">
                                    <ResumeCard
                                        key={education.school}
                                        href={education.href}
                                        logoUrl={education.logoUrl}
                                        altText={education.school}
                                        title={education.school}
                                        subtitle={education.degree}
                                        period={`${education.start} - ${education.end}`}
                                    />
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                        {DATA.skills.map((skill, id) => (
                            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                <Badge key={skill}>{skill}</Badge>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 18}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Projects
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A showcase of projects that demonstrate my technical expertise and
                                problem-solving abilities
                            </p>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 gap-6">
                        {DATA.projects.map((project, id) => (
                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
                                <div className="group hover:bg-muted/50 transition-all duration-200 p-4 rounded-xl -mx-4 hover:shadow-lg">
                                    <ProjectCard
                                        href={project.href}
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        dates={project.dates}
                                        tags={project.technologies}
                                        image={project.image}
                                        video={project.video}
                                        links={project.links}
                                    />
                                    {project.active && (
                                        <div className="mt-3">
                                            <Badge className="bg-green-600 hover:bg-green-700">
                                                Active Project
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                {id < DATA.projects.length - 1 && <Separator className="my-8" />}
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-16">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 20}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Achievements
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Key Milestones</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Notable accomplishments that define my professional journey
                            </p>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {DATA.achievements.map((achievement, index) => (
                            <BlurFade
                                key={achievement.title}
                                delay={BLUR_FADE_DELAY * 21 + index * 0.1}
                            >
                                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
                                    <CardHeader className="text-center">
                                        <div className="text-4xl mb-3">{achievement.icon}</div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                            {achievement.title}
                                        </CardTitle>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs w-fit mx-auto"
                                        >
                                            {achievement.year}
                                        </Badge>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-center text-sm">
                                            {achievement.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            <section id="hackathons" className="bg-muted/30 -mx-6 px-6 py-12 rounded-2xl">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 20}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Hackathons
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Building Innovation
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                During my time in university, I attended {DATA.hackathons.length}+
                                hackathons. People from around the country would come together and
                                build incredible things in 2-3 days.
                            </p>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {DATA.hackathons.map((project, id) => (
                            <BlurFade
                                key={project.title + project.dates}
                                delay={BLUR_FADE_DELAY * 21 + id * 0.05}
                            >
                                <div className="group hover:bg-background/50 transition-colors duration-200 p-4 rounded-xl -mx-4">
                                    <HackathonCard
                                        title={project.title}
                                        description={project.description}
                                        location={project.location}
                                        dates={project.dates}
                                        image={project.image}
                                        links={project.links}
                                    />
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 25}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Testimonials
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">What Clients Say</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Feedback from amazing people I&apos;ve had the pleasure to work with
                            </p>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {DATA.testimonials.map((testimonial, index) => (
                            <BlurFade
                                key={testimonial.name}
                                delay={BLUR_FADE_DELAY * 26 + index * 0.2}
                            >
                                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/20">
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mx-4 mt-4">
                                            <Avatar className="w-12 h-12 border-2 border-muted">
                                                <AvatarImage
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                />
                                                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold">
                                                    {testimonial.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-lg">
                                                    {testimonial.name}
                                                </CardTitle>
                                                <CardDescription className="text-sm">
                                                    {testimonial.role}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="relative">
                                            {/* <Quote className="absolute -top-2 -left-2 w-6 h-6 text-muted-foreground/30" /> */}
                                            <p className="text-sm leading-relaxed pl-4 italic group-hover:text-foreground transition-colors">
                                                &ldquo;{testimonial.content}&rdquo;
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 my-4 ml-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="space-y-8 text-center py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 22}>
                        <div className="space-y-4">
                            <Badge variant="outline" className="mb-4">
                                Contact
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Let&apos;s Work Together
                            </h2>
                            <p className="mx-auto max-w-2xl text-muted-foreground">
                                Want to chat? Just shoot me a dm{" "}
                                <Link
                                    href={DATA.contact.social.X.url}
                                    className="text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    with a direct question on twitter
                                </Link>{" "}
                                and I&apos;ll respond whenever I can. I will ignore all soliciting.
                            </p>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 23}>
                        <div className="flex justify-center gap-6 mt-8">
                            {Object.entries(DATA.contact.social)
                                .filter(([_, social]) => social.navbar)
                                .map(([key, social]) => (
                                    <Tooltip key={key}>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 p-4 rounded-full hover:scale-105 shadow-lg"
                                            >
                                                <social.icon className="h-6 w-6" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>{social.name}</TooltipContent>
                                    </Tooltip>
                                ))}
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 24}>
                        <div className="flex justify-center gap-4 mt-8 flex-wrap">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                            >
                                <Link href={`mailto:${DATA.contact.email}`}>
                                    <Mail className="w-5 h-5 mr-2" />
                                    Send Email
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href={`tel:${DATA.contact.tel}`}>Call Me</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white"
                            >
                                <Link
                                    href="https://calendar.app.google/Sz3q9njmFQ3XMQ4y8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book a Meeting
                                </Link>
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
