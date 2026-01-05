"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { STORE_INFO, Product } from "@/lib/data";
import { formatVND, cn } from "@/lib/utils";
import { Phone, MessageSquare, ChevronLeft, CheckCircle2, Star, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/features/product-card";

interface ProductDetailClientProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 px-6 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <Link href="/products" className="inline-flex items-center space-x-2 text-slate-400 hover:text-blue-600 mb-8 font-medium transition-colors group">
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Quay lại danh sách sản phẩm</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
                        {/* Image Gallery - Enhanced for mobile scroll snap */}
                        <div className="space-y-6">
                            <div className="flex lg:block overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:overflow-visible no-scrollbar">
                                {[product.image, product.image, product.image].map((img, i) => (
                                    <motion.div
                                        key={i}
                                        initial={i === 0 ? { opacity: 0, scale: 0.95 } : {}}
                                        animate={i === 0 ? { opacity: 1, scale: 1 } : {}}
                                        className="relative aspect-square w-full shrink-0 rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 snap-start lg:mb-6"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} ${i}`}
                                            fill
                                            className="object-cover"
                                            priority={i === 0}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Thumbnails (Visible on desktop) */}
                            <div className="hidden lg:grid grid-cols-3 gap-4">
                                {[product.image, product.image, product.image].map((img, i) => (
                                    <div key={i} className={cn(
                                        "relative aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all",
                                        i === 0 ? "border-blue-600" : "border-transparent hover:border-blue-200"
                                    )}>
                                        <Image src={img} alt={`${product.name} ${i}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-widest">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center text-amber-400">
                                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                                        <span className="ml-2 text-slate-400 text-sm font-medium">(4.8/5)</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight text-slate-900">
                                    {product.name}
                                </h1>

                                <div className="flex items-baseline space-x-4 mb-8">
                                    <p className="text-4xl font-bold text-blue-600">
                                        {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                                    </p>
                                    {product.price > 0 && (
                                        <p className="text-xl text-slate-300 line-through font-medium">
                                            {formatVND(product.price * 1.2)}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center space-x-3 text-green-600 font-bold bg-green-50 px-4 py-3 rounded-xl w-fit">
                                        <CheckCircle2 size={24} />
                                        <span>{product.status} tại Showroom Bắc Ninh</span>
                                    </div>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Specs/Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                    {[
                                        { icon: <Truck size={20} />, text: "Giao hàng nhanh" },
                                        { icon: <ShieldCheck size={20} />, text: "Bảo hành 10 năm" },
                                        { icon: <Star size={20} />, text: "Chất liệu cao cấp" },
                                        { icon: <Star size={20} />, text: "Kháng khuẩn 99%" },
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center space-x-3 text-slate-700 font-medium p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div className="text-blue-600">{feat.icon}</div>
                                            <span>{feat.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop CTAs */}
                                <div className="hidden sm:grid grid-cols-2 gap-6">
                                    <a
                                        href={`tel:${STORE_INFO.phone}`}
                                        className="flex items-center justify-center space-x-3 bg-blue-600 text-white min-h-[56px] py-4 rounded-2xl font-bold text-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all"
                                    >
                                        <Phone size={24} />
                                        <span>Gọi Tư Vấn</span>
                                    </a>
                                    <a
                                        href={STORE_INFO.zalo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-3 bg-white border-2 border-slate-200 text-slate-900 min-h-[56px] py-4 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:scale-[1.02] transition-all"
                                    >
                                        <MessageSquare size={24} className="text-blue-600" />
                                        <span>Chat Zalo</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <section className="border-t border-slate-100 pt-24">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-bold font-playfair">Sản phẩm tương tự</h2>
                            <Link href="/products" className="text-blue-600 font-bold hover:underline">Xem tất cả</Link>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sticky Mobile Bar (Mobile only) - Adding pb-safe logic */}
                <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-white via-white/80 to-transparent">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[2rem] p-4 flex gap-3"
                    >
                        <a
                            href={`tel:${STORE_INFO.phone}`}
                            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white min-h-[56px] py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
                        >
                            <Phone size={20} />
                            <span>Gọi ngay</span>
                        </a>
                        <a
                            href={STORE_INFO.zalo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-white border border-slate-200 text-blue-600 w-16 min-h-[56px] rounded-2xl active:scale-95 transition-transform shadow-sm"
                        >
                            <MessageSquare size={24} />
                        </a>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
