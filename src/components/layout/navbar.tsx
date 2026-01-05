"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { STORE_INFO } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Tin tức", href: "/blog" },
    { name: "Liên hệ", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 gpu-accel",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-md py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="text-xl md:text-2xl font-black font-sans tracking-tight text-primary transition-transform group-hover:scale-105">
                        Showroom <span className="text-blue-950">Bedding</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-light transition-all shadow-md active:scale-95"
                    >
                        <Phone size={14} />
                        <span>Gọi ngay</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        {...{
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: "auto" },
                            exit: { opacity: 0, height: 0 }
                        } as any}
                        className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-900"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={`tel:${STORE_INFO.phone}`}
                                className="flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-xl font-bold"
                            >
                                <Phone size={18} />
                                <span>Gọi ngay: {STORE_INFO.phone}</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
