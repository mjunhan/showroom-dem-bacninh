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
                whileHover: { y: -8, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } },
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { type: "spring", stiffness: 100, damping: 20 }
            } as any}
            className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-200 hover:border-primary/30 group transition-all duration-300 hover:shadow-lg h-full flex flex-col gpu-accel"
        >
            <Link href={`/products/${slug}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-50">
                {!hasError ? (
                    <Image
                        src={imageUrl} // Changed from mainImageUrl to imageUrl to match existing variable
                        alt={product.name}
                        fill
                        placeholder="blur"
                        blurDataURL={imageUrl} // Changed from mainImageUrl to imageUrl
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-200">
                        <Package size={48} />
                    </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm",
                        product.status === "Còn hàng"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-slate-50 text-slate-600 border border-slate-200"
                    )}>
                        {product.status}
                    </span>
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {product.category}
                </p>

                {/* Product Title */}
                <Link href={`/products/${slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug min-h-[3.5rem]">
                        {product.name}
                    </h3>
                </Link>

                {/* Price & Brand */}
                <div className="flex flex-col items-start gap-1 mb-6">
                    <p className="text-xl font-bold text-primary leading-none">
                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                    </p>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                        {product.brand}
                    </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                    <a
                        href={STORE_INFO.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">Tư vấn Zalo</span>
                    </a>
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="w-full bg-secondary hover:bg-secondary-dark text-primary font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 border border-primary/20 active:scale-95"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Gọi ngay</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
