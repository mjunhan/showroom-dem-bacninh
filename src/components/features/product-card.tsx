"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ImageIcon } from "lucide-react";
import { Product } from "@/lib/data";
import { formatVND, cn } from "@/lib/utils";
import { STORE_INFO } from "@/lib/data";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [hasError, setHasError] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-xl overflow-hidden border border-slate-100 group transition-all"
        >
            <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-100">
                {!hasError ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <ImageIcon size={48} className="text-slate-300 mb-4" />
                        <span className="text-slate-400 font-medium text-sm line-clamp-2">{product.name}</span>
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                        product.status === "Còn hàng" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                    )}>
                        {product.status}
                    </span>
                </div>
            </Link>

            <div className="p-6">
                <p className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-widest">{product.category}</p>
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex flex-col items-start gap-1 mb-6">
                    <p className="text-lg font-bold text-blue-700 leading-none">
                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                    </p>
                    <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
                </div>

                <div className="flex flex-col gap-2 mt-3 w-full">
                    {/* Button 1: Zalo */}
                    <a
                        href={STORE_INFO.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all h-9 flex items-center justify-center gap-2 rounded-xl"
                    >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-medium">Tư vấn Zalo</span>
                    </a>

                    {/* Button 2: Call */}
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="w-full border border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all h-9 flex items-center justify-center gap-2 rounded-xl"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-medium">Gọi ngay</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
