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
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
                    alt="Bedding Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/40 to-transparent backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-10 relative z-10 text-white flex-1 flex flex-col justify-center pt-40 md:pt-64 pb-32 gpu-accel">
                <motion.div
                    {...{
                        initial: { opacity: 0, y: 60 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            mass: 1,
                            duration: 0.8
                        }
                    } as any}
                    className="max-w-5xl"
                >
                    <span className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-[10px] font-black mb-10 text-blue-50 uppercase tracking-[0.5em] shadow-2xl">
                        Bộ Sưu Tập 2024
                    </span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black font-serif mb-10 leading-[0.95] tracking-tighter">
                        Khởi Đầu <br />
                        <span className="text-primary-light drop-shadow-2xl">Giấc Ngủ Đế Vương</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-50/70 mb-16 leading-relaxed max-w-3xl font-medium">
                        Khám phá sự giao thoa giữa nghệ thuật chế tác và giấc ngủ thượng lưu tại showroom bedding lớn nhất Bắc Ninh.
                    </p>
                    <div className="flex flex-wrap gap-8">
                        <motion.button
                            {...{
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.98 }
                            } as any}
                            onClick={scrollToProducts}
                            className="h-16 px-12 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center space-x-3 hover:bg-primary-light transition-all shadow-blue-glow active:scale-95 group"
                        >
                            <span>Trải nghiệm ngay</span>
                            <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                        <motion.div
                            {...{
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.98 }
                            } as any}
                        >
                            <Link
                                href="/contact"
                                className="h-16 px-12 bg-white/5 backdrop-blur-2xl border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center active:scale-95"
                            >
                                <span>Nhận tư vấn</span>
                            </Link>
                        </motion.div>
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
