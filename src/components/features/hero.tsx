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
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
                    alt="Bedding Hero"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white">
                <motion.div
                    {...{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    } as any}
                    className="max-w-4xl"
                >
                    <span className="inline-block px-5 py-2 bg-primary/20 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold mb-8 text-primary-light uppercase tracking-[0.3em]">
                        Chăn Ga Gối Đệm Cao Cấp
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black font-sans mb-8 leading-[1.1] tracking-tight">
                        Kiến Tạo Không Gian <br />
                        <span className="text-primary-light">Sống Đẳng Cấp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
                        Đại lý chăn ga gối đệm chính hãng số 1 Bắc Ninh. Nơi khơi gợi nguồn cảm hứng cho những giấc ngủ say và sự sang trọng tuyệt đỉnh.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <button
                            onClick={scrollToProducts}
                            className="h-14 px-10 bg-primary text-white rounded-2xl font-bold flex items-center space-x-2 hover:bg-primary-light transition-all shadow-2xl shadow-primary/40 active:scale-95 group"
                        >
                            <span className="tracking-wide">Khám phá ngay</span>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            href="/contact"
                            className="h-14 px-10 bg-white/5 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center active:scale-95"
                        >
                            <span className="tracking-wide">Liên Hệ Tư Vấn</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Floaty Decorations */}
            <motion.div
                {...{
                    animate: { y: [0, -20, 0] },
                    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                } as any}
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl hidden md:block"
            />
        </section>
    );
}
