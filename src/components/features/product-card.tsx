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
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-2xl overflow-hidden border border-slate-100/60 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
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
                <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-[0.2em]">{product.category}</p>
                <Link href={`/products/${slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-1 leading-tight">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex flex-col items-start gap-1 mb-6">
                    <p className="text-xl font-extrabold text-primary leading-none">
                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                    </p>
                    <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">{product.brand}</span>
                </div>

                <div className="flex flex-col gap-3 mt-auto w-full">
                    {/* Button 1: Zalo */}
                    <a
                        href={STORE_INFO.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-primary-light text-white shadow-sm hover:shadow-lg transition-all h-11 flex items-center justify-center gap-2 rounded-xl active:scale-95"
                    >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-semibold tracking-wide">Tư vấn Zalo</span>
                    </a>

                    {/* Button 2: Call */}
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-primary/30 hover:text-primary transition-all h-11 flex items-center justify-center gap-2 rounded-xl active:scale-95"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-semibold tracking-wide">Gọi ngay</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
