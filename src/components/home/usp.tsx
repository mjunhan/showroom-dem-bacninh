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
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        {...{
                            initial: { opacity: 0, y: 40 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true, margin: "-100px" },
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: i * 0.1
                            },
                            whileHover: {
                                scale: 1.05,
                                y: -8,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }
                        } as any}
                        className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-300 hover:shadow-lg cursor-pointer group"
                    >
                        <motion.div
                            {...{
                                animate: { y: [0, -8, 0] },
                                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            } as any}
                            className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300"
                        >
                            {f.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
