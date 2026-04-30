import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
    title: "Blog",
    description: "Articles on full-stack development, SAAS architecture, Next.js, payment integrations, and tech leadership by Prabhjot Singh Chadha.",
    alternates: {
        canonical: "https://prabhjotsinghchadha.com/blog",
    },
    openGraph: {
        title: "Blog | Prabhjot Singh Chadha",
        description: "Articles on full-stack development, SAAS architecture, Next.js, payment integrations, and tech leadership.",
        url: "https://prabhjotsinghchadha.com/blog",
        siteName: "Prabhjot Singh Chadha",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blog — Prabhjot Singh Chadha",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Prabhjot Singh Chadha",
        description: "Articles on full-stack development, SAAS architecture, Next.js, payment integrations, and tech leadership.",
        creator: "@tweet_prabhjot",
        images: ["/og-image.png"],
    },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <section>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
            </BlurFade>
            {posts
                .sort((a, b) => {
                    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post, id) => (
                    <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                        <Link className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
                            <div className="w-full flex flex-col">
                                <p className="tracking-tight">{post.metadata.title}</p>
                                <p className="h-6 text-xs text-muted-foreground">
                                    {post.metadata.publishedAt}
                                </p>
                            </div>
                        </Link>
                    </BlurFade>
                ))}
        </section>
    );
}
