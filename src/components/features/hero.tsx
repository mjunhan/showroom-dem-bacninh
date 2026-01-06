"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface HeroProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    imageUrl?: string;
}

export function Hero({
    title = "Khởi Đầu Giấc Ngủ Tuyệt Vời",
    subtitle = "Khám phá sự giao thoa giữa nghệ thuật chế tác và giấc ngủ tinh tế tại showroom bedding lớn nhất Bắc Ninh.",
    buttonText = "Trải nghiệm ngay",
    imageUrl = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
}: HeroProps) {
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
                    src={imageUrl}
                    alt="Bedding Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2854]/95 via-[#0F2854]/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white flex-1 flex flex-col justify-center pt-32 md:pt-48 pb-32">
                <motion.div
                    {...{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, ease: "easeOut" }
                    } as any}
                    className="max-w-4xl"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-lg text-[10px] font-bold mb-8 text-accent uppercase tracking-[0.2em]">
                        Bộ Sưu Tập 2024
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-8 leading-[1.1] tracking-tight text-white">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-secondary mb-12 leading-relaxed max-w-2xl font-medium">
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={scrollToProducts}
                            className="h-14 px-10 bg-accent hover:bg-accent/90 text-primary rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer"
                        >
                            {buttonText}
                        </button>
                        <Link
                            href="/contact"
                            className="h-14 px-10 bg-white/10 border border-white/20 text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                            Nhận tư vấn
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
