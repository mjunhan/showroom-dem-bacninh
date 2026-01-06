import { getPost, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
        <>
            <Navbar />
            <main className="min-h-screen pt-24 md:pt-32 pb-20 bg-slate-50">
                <article className="max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Navigation */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Quay lại
                    </Link>

                    <div className="bg-white rounded-lg border border-primary/5 shadow-sm overflow-hidden p-8 md:p-12 lg:p-16">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="flex flex-wrap items-center gap-4 text-accent text-[10px] font-bold uppercase tracking-widest mb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="w-1 h-1 bg-accent/30 rounded-full" />
                                <div className="flex items-center gap-2">
                                    <User size={14} />
                                    <span>Ban biên tập</span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight font-playfair">
                                {post.title}
                            </h1>

                            <p className="text-lg text-slate-500 font-medium leading-relaxed italic border-l-4 border-accent/20 pl-8 py-1">
                                {post.excerpt}
                            </p>
                        </header>

                        {/* Featured Image */}
                        {post.mainImage && (
                            <div className="relative w-full aspect-video mb-16 rounded-lg overflow-hidden border border-primary/5 shadow-lg">
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
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-playfair prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-blockquote:border-accent prose-blockquote:bg-slate-100 prose-blockquote:rounded-lg">
                            <PortableText value={post.body} components={ptComponents} />
                        </div>

                        {/* Footer */}
                        <footer className="mt-20 pt-12 border-t border-slate-50 flex flex-col items-center text-center">
                            <p className="text-slate-400 font-medium mb-8">Cảm ơn bạn đã đọc bài viết này!</p>
                            <Link
                                href="/blog"
                                className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/10 hover:bg-primary-light transition-all active:scale-95 flex items-center gap-3"
                            >
                                <ArrowLeft size={18} />
                                Khám phá bài viết khác
                            </Link>
                        </footer>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
