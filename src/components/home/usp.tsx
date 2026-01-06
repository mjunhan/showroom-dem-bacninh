"use client";

import { ShieldCheck, Truck, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

export function USP() {
    const features = [
        {
            icon: <ShieldCheck className="text-primary" size={32} />,
            title: "Hàng chính hãng",
            desc: "Cam kết 100% sản phẩm chính hãng từ các thương hiệu lớn.",
        },
        {
            icon: <BadgePercent className="text-primary" size={32} />,
            title: "Giá tốt tại kho",
            desc: "Ưu đãi hấp dẫn nhất thị trường, không qua trung gian.",
        },
        {
            icon: <Truck className="text-primary" size={32} />,
            title: "Miễn phí ship Bắc Ninh",
            desc: "Giao hàng tận nơi miễn phí trong nội thành TP. Bắc Ninh.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white border-y border-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        {...{
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { duration: 0.5, delay: i * 0.1 },
                            whileHover: { y: -4 }
                        } as any}
                        className="flex flex-col items-start text-left p-8 rounded-lg border border-slate-50 hover:border-primary/10 transition-all duration-300 group cursor-default"
                    >
                        <div className="mb-6 p-3 bg-secondary/50 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">{f.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
