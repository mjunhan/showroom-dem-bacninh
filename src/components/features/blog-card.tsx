"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ImageIcon } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { useState } from "react";

interface BlogCardProps {
    post: {
        title: string;
        slug: string;
        mainImage: any;
        excerpt: string;
        publishedAt: string;
    };
}

export function BlogCard({ post }: BlogCardProps) {
    const [hasError, setHasError] = useState(false);
    const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <motion.div
            {...{
                whileHover: { y: -4 },
                transition: { duration: 0.3 }
            } as any}
            className="bg-white rounded-lg overflow-hidden border border-slate-100 group flex flex-col h-full hover:border-primary/20 transition-all duration-300"
        >
            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-slate-50">
                {imageUrl && !hasError ? (
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <ImageIcon size={40} className="text-slate-200 mb-2" />
                        <span className="text-slate-400 font-medium text-xs line-clamp-2">{post.title}</span>
                    </div>
                )}
            </Link>

            <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Calendar size={12} />
                    <span>{formattedDate}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group/btn"
                >
                    Đọc thêm
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
