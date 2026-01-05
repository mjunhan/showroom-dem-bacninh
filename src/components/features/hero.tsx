"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
    const scrollToProducts = () => {
        const section = document.getElementById("featured-products");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://placehold.co/1920x600/2563EB/FFFFFF/png?text=Showroom+Chan+Ga+Goi+Dem+Bac+Ninh"
                    alt="Bedding Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-1.5 bg-blue-600/20 backdrop-blur-md border border-blue-600/30 rounded-full text-sm font-semibold mb-6 text-blue-100 uppercase tracking-widest">
                        Showroom Chính Hãng
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
                        Giấc Ngủ Êm Ái - <br />
                        <span className="text-blue-600 italic">Cuộc Sống Thăng Hoa</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed max-w-lg">
                        Đại lý chăn ga gối đệm chính hãng số 1 Bắc Ninh. Mang lại sự êm ái và sang trọng tuyệt đối cho phòng ngủ của bạn.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={scrollToProducts}
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center space-x-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 group"
                        >
                            <span>Xem Sản Phẩm</span>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                        >
                            Liên Hệ Ngay
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Floaty Decorations */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl hidden md:block"
            />
        </section>
    );
}
