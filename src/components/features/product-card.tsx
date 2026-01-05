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
                whileHover: { y: -12, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } },
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { type: "spring", stiffness: 100, damping: 20 }
            } as any}
            className="bg-white/70 backdrop-blur-md rounded-[24px] overflow-hidden border border-white/20 group transition-all duration-500 hover:shadow-ocean h-full flex flex-col relative gpu-accel"
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

                {/* Sale label if needed */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-primary/90 backdrop-blur-xl text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg border border-white/20 uppercase tracking-[0.2em]">
                        New Arrival
                    </span>
                </div>
                {/* Original status label, moved below new label */}
                <div className="absolute top-4 right-4"> {/* Adjusted position to avoid overlap */}
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md",
                        product.status === "Còn hàng" ? "bg-green-500/10 text-green-700 border border-green-200/50" : "bg-slate-500/10 text-slate-600 border border-slate-200/50"
                    )}>
                        {product.status}
                    </span>
                </div>
            </Link>

            <div className="p-8 flex flex-col flex-1">
                <p className="text-[10px] font-black text-primary mb-4 uppercase tracking-[0.3em]">{product.category}</p>
                <Link href={`/products/${slug}`}>
                    <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-[1.2] min-h-[3.5rem] font-serif">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex flex-col items-start gap-1 mb-8">
                    <p className="text-2xl font-black text-primary leading-none tracking-tighter">
                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                    </p>
                    <span className="text-[11px] text-blue-900/40 font-bold tracking-[0.2em] uppercase">{product.brand}</span>
                </div>

                <div className="flex flex-col gap-4 mt-auto w-full">
                    {/* Button 1: Zalo */}
                    <a
                        href={STORE_INFO.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-primary-light text-white shadow-blue-glow transition-all h-14 flex items-center justify-center gap-2 rounded-2xl active:scale-95"
                    >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Tư vấn Zalo</span>
                    </a>

                    {/* Button 2: Call */}
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="w-full bg-blue-50/50 hover:bg-blue-50 text-primary border border-primary/10 transition-all h-14 flex items-center justify-center gap-2 rounded-2xl active:scale-95"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Gọi ngay</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
