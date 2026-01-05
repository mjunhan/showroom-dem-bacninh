import { getPost, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: "Không tìm thấy bài viết" };

    return {
        title: `${post.title} | Showroom Đệm Bắc Ninh`,
        description: post.excerpt,
    };
}

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) return null;
            return (
                <div className="relative w-full aspect-video my-8 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog image"}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl font-black text-slate-900 mt-12 mb-6 leading-tight">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-bold text-slate-900 mt-10 mb-5 leading-tight">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4 leading-tight">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3 leading-tight">{children}</h4>,
        normal: ({ children }: any) => <p className="text-lg text-slate-600 leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-slate-700 bg-primary/5 rounded-r-xl">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-slate-600 text-lg">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-slate-600 text-lg">{children}</ol>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
            return (
                <Link href={value.href} rel={rel} className="text-primary font-medium underline underline-offset-4 hover:text-primary-light transition-colors">
                    {children}
                </Link>
            );
        },
        strong: ({ children }: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <main className="min-h-screen pt-32 pb-20">
            <article className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Navigation */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-medium transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Quay lại Blog
                </Link>

                {/* Header */}
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-6">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={16} />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <User size={16} />
                            <span>Ban biên tập</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-200 pl-6">
                        {post.excerpt}
                    </p>
                </header>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="relative w-full aspect-video mb-12 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-slate prose-lg max-w-none">
                    <PortableText value={post.body} components={ptComponents} />
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center text-center">
                    <p className="text-slate-400 mb-6">Cảm ơn bạn đã đọc bài viết này!</p>
                    <Link
                        href="/blog"
                        className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all active:scale-95 flex items-center gap-2"
                    >
                        Khám phá thêm bài viết khác
                        <ArrowLeft size={18} className="rotate-180" />
                    </Link>
                </footer>
            </article>
        </main>
    );
}
