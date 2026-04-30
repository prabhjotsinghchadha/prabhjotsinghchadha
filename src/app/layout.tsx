import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    keywords: [
        "Prabhjot Singh Chadha",
        "Fractional CTO",
        "SAAS Expert",
        "Full Stack Developer",
        "Next.js Developer",
        "React Developer",
        "TypeScript",
        "Node.js",
        "Stripe Integration",
        "Payment Integration",
        "Firebase",
        "Google Cloud Platform",
        "Unity Game Development",
        "Remote CTO",
        "India",
        "Madhya Pradesh",
        "MariNation",
        "FPS Lounge",
        "Software Engineer",
        "Web Development",
    ],
    authors: [{ name: DATA.name, url: DATA.url }],
    creator: DATA.name,
    alternates: {
        canonical: DATA.url,
    },
    openGraph: {
        title: `${DATA.name} — Fractional CTO & SAAS Expert`,
        description: DATA.description,
        url: DATA.url,
        siteName: `${DATA.name}`,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: `${DATA.name} — Fractional CTO & SAAS Expert`,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: `${DATA.name} — Fractional CTO & SAAS Expert`,
        description: DATA.description,
        card: "summary_large_image",
        creator: "@tweet_prabhjot",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
                    fontSans.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    <TooltipProvider delayDuration={0}>
                        {children}
                        <Navbar />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
