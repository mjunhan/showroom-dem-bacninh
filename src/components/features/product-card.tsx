"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ImageIcon, Package } from "lucide-react";
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
                whileHover: {
                    y: -8,
                    transition: { duration: 0.3 }
                },
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 }
            } as any}
            className="bg-white rounded-lg overflow-hidden border border-slate-100 hover:border-primary/20 group transition-all duration-300 h-full flex flex-col gpu-accel cursor-pointer"
        >
            <Link href={`/products/${slug}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-50">
                {!hasError ? (
                    <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        placeholder="blur"
                        blurDataURL={imageUrl}
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-200">
                        <Package size={48} />
                    </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider",
                        product.status === "Còn hàng"
                            ? "bg-green-50 text-green-700 border border-green-100"
                            : "bg-slate-50 text-slate-500 border border-slate-100"
                    )}>
                        {product.status}
                    </span>
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-1 text-left">
                {/* Category */}
                <p className="text-[10px] font-bold text-accent uppercase tracking-[0.1em] mb-2">
                    {product.category}
                </p>

                {/* Product Title */}
                <Link href={`/products/${slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {product.name}
                    </h3>
                </Link>

                {/* Subtext: Brand */}
                <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">
                    {product.brand}
                </p>

                {/* Price */}
                <div className="mt-auto pt-4 border-t border-slate-50">
                    <p className="text-xl font-bold text-primary">
                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                    </p>
                </div>

                {/* CTA Buttons - Simplified for cleaner look */}
                <div className="flex gap-2 mt-6">
                    <a
                        href={STORE_INFO.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-white font-bold py-3 rounded-lg text-xs transition-all hover:bg-primary-light flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Tư vấn
                    </a>
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="p-3 bg-secondary text-primary rounded-lg border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-center"
                    >
                        <Phone className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
