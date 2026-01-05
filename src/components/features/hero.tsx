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
        <section className="relative min-h-[80vh] w-full overflow-hidden flex flex-col">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
                    alt="Bedding Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-600/30 backdrop-blur-[1px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white flex-1 flex flex-col justify-center pt-32 md:pt-48 pb-20">
                <motion.div
                    {...{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    } as any}
                    className="max-w-4xl"
                >
                    <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black mb-8 text-blue-50 uppercase tracking-[0.4em]">
                        Chăn Ga Gối Đệm Cao Cấp
                    </span>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-serif mb-8 leading-[1.1] tracking-tighter">
                        Kiến Tạo Không Gian <br />
                        <span className="text-primary-light drop-shadow-sm">Sống Đẳng Cấp</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-50/80 mb-12 leading-relaxed max-w-2xl font-medium">
                        Đại lý chăn ga gối đệm chính hãng số 1 Bắc Ninh. Nơi khơi gợi nguồn cảm hứng cho những giấc ngủ say và sự sang trọng tuyệt đỉnh.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <button
                            onClick={scrollToProducts}
                            className="h-14 px-10 bg-primary text-white rounded-2xl font-bold flex items-center space-x-2 hover:bg-primary-light transition-all shadow-[0_20px_40px_rgba(2,132,199,0.4)] active:scale-95 group"
                        >
                            <span className="tracking-wide">Khám phá ngay</span>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            href="/contact"
                            className="h-14 px-10 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center active:scale-95"
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
