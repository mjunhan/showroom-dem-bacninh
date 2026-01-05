"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ImageIcon } from "lucide-react";
import { Product } from "@/lib/data";
import { formatVND, cn } from "@/lib/utils";
import { STORE_INFO } from "@/lib/data";
import { urlFor } from "@/lib/sanity";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [hasError, setHasError] = useState(false);

    // Support both Sanity slug object and legacy string slug
    const slug = typeof product.slug === 'string' ? product.slug : product.slug.current;

    // Support both Sanity image object and legacy string URL
    const imageUrl = typeof product.image === 'string'
        ? product.image
        : urlFor(product.image).url();

    return (
        <motion.div
            {...{
                whileHover: { y: -8, scale: 1.01 },
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            } as any}
            className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(2,132,199,0.08)] h-full flex flex-col relative"
        >
            <Link href={`/products/${slug}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-50">
                {!hasError ? (
                    <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <ImageIcon size={40} className="text-slate-200 mb-4" />
                        <span className="text-slate-400 font-medium text-xs line-clamp-2">{product.name}</span>
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md",
                        product.status === "Còn hàng" ? "bg-green-500/10 text-green-700 border border-green-200/50" : "bg-slate-500/10 text-slate-600 border border-slate-200/50"
                    )}>
                        {product.status}
                    </span>
                </div>
            </Link>

            <div className="p-6">
                <p className="text-[10px] font-black text-primary mb-3 uppercase tracking-[0.25em]">{product.category}</p>
                <Link href={`/products/${slug}`}>
                    <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug min-h-[3.5rem] font-serif">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex flex-col items-start gap-1 mb-8">
                    <p className="text-2xl font-black text-primary leading-none tracking-tight">
                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                    </p>
                    <span className="text-[11px] text-blue-950/40 font-bold tracking-widest uppercase">{product.brand}</span>
                </div>

                <div className="flex flex-col gap-3 mt-auto pt-4 w-full">
                    {/* Button 1: Zalo */}
                    <a
                        href={STORE_INFO.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-primary-light text-white shadow-[0_10px_20px_rgba(2,132,199,0.3)] hover:shadow-[0_15px_30px_rgba(2,132,199,0.4)] transition-all h-12 flex items-center justify-center gap-2 rounded-2xl active:scale-95"
                    >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-black tracking-wider">Tư vấn Zalo</span>
                    </a>

                    {/* Button 2: Call */}
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="w-full bg-blue-50 text-primary border border-primary/20 hover:bg-blue-100 hover:border-primary/40 transition-all h-12 flex items-center justify-center gap-2 rounded-2xl active:scale-95"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-black tracking-wider">Gọi ngay</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
