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
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ProductGallery } from "@/components/product/product-gallery";

interface ProductDetailClientProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    // Prepare images array for gallery
    const galleryImages = product.images && product.images.length > 0
        ? product.images
        : (product.image ? [product.image] : []);

    return (
        <>
            <Navbar />
            <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <Link href="/products" className="inline-flex items-center space-x-2 text-slate-400 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors group">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Quay lại</span>
                    </Link>

                    <div className="bg-white rounded-lg border border-primary/5 shadow-sm overflow-hidden mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Image Gallery */}
                            <div className="p-4 md:p-8 bg-slate-50 border-r border-primary/5">
                                <ProductGallery images={galleryImages} />
                            </div>

                            {/* Product Info */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <motion.div
                                    {...{
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.2 }
                                    } as any}
                                >
                                    <div className="flex items-center space-x-4 mb-8">
                                        <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-lg text-[10px] font-bold uppercase tracking-[0.2em]">
                                            {product.category}
                                        </span>
                                        <div className="flex items-center text-amber-400">
                                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                                            <span className="ml-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">(4.8/5)</span>
                                        </div>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair leading-tight text-slate-900">
                                        {product.name}
                                    </h1>

                                    <div className="flex items-baseline space-x-4 mb-10">
                                        <p className="text-4xl font-bold text-primary">
                                            {product.price === 0 ? "Liên hệ báo giá" : formatVND(product.price)}
                                        </p>
                                        {product.price > 0 && product.originalPrice && (
                                            <p className="text-lg text-slate-300 line-through font-medium">
                                                {formatVND(product.originalPrice)}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-6 mb-12">
                                        <div className="flex items-center space-x-3 text-green-700 font-bold bg-green-50 px-4 py-2.5 rounded-lg w-fit text-xs uppercase tracking-widest border border-green-100">
                                            <CheckCircle2 size={18} />
                                            <span>{product.status} tại Showroom</span>
                                        </div>
                                        <div className="text-slate-600 leading-relaxed prose prose-slate max-w-none text-base font-medium italic">
                                            {Array.isArray(product.description) ? (
                                                <PortableText value={product.description} />
                                            ) : (
                                                product.description
                                            )}
                                        </div>
                                    </div>

                                    {/* Specs/Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                        {(product.specs || [
                                            { icon: <Truck size={18} />, text: "Giao hàng nhanh" },
                                            { icon: <ShieldCheck size={18} />, text: "Bảo hành 10 năm" },
                                        ]).map((feat: any, i: number) => {
                                            const isSpec = typeof feat === 'string';
                                            return (
                                                <div key={i} className="flex items-center space-x-3 text-slate-700 font-bold text-xs uppercase tracking-widest p-4 rounded-lg bg-slate-100 border border-primary/5">
                                                    <div className="text-accent">{isSpec ? <CheckCircle2 size={18} /> : feat.icon}</div>
                                                    <span>{isSpec ? feat : feat.text}</span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Desktop CTAs */}
                                    <div className="hidden sm:grid grid-cols-2 gap-6">
                                        <a
                                            href={`tel:${STORE_INFO.phone}`}
                                            className="flex items-center justify-center space-x-3 bg-primary text-white min-h-[56px] py-4 rounded-lg font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/10 hover:bg-primary-light transition-all"
                                        >
                                            <Phone size={18} />
                                            <span>Gọi Tư Vấn</span>
                                        </a>
                                        <a
                                            href={STORE_INFO.zalo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center space-x-3 bg-white border border-slate-200 text-slate-900 min-h-[56px] py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all"
                                        >
                                            <MessageSquare size={18} className="text-primary" />
                                            <span>Chat Zalo</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <section className="pt-24 border-t border-primary/5">
                        <div className="flex items-end justify-between mb-12">
                            <div className="text-left">
                                <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-slate-900">Sản phẩm tương tự</h2>
                                <p className="text-slate-500 font-medium">Khám phá thêm những lựa chọn tuyệt vời khác.</p>
                            </div>
                            <Link href="/products" className="text-primary font-bold hover:text-accent transition-colors text-sm uppercase tracking-widest">Xem tất cả</Link>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p._id} product={p} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sticky Mobile Bar (Mobile only) */}
                <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-secondary via-secondary/80 to-transparent">
                    <motion.div
                        {...{
                            initial: { y: 100 },
                            animate: { y: 0 }
                        } as any}
                        className="bg-white/90 backdrop-blur-xl border border-primary/10 shadow-2xl rounded-lg p-4 flex gap-3"
                    >
                        <a
                            href={`tel:${STORE_INFO.phone}`}
                            className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white min-h-[56px] p-4 rounded-lg font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                        >
                            <Phone size={18} />
                            <span>Gọi ngay</span>
                        </a>
                        <a
                            href={STORE_INFO.zalo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-white border border-slate-200 text-primary w-14 min-h-[56px] rounded-lg active:scale-95 transition-transform shadow-sm"
                        >
                            <MessageSquare size={20} />
                        </a>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
