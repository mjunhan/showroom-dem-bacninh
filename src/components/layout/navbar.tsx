"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { SPRING_TRANSITION } from "@/lib/animation";

const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Tin tức", href: "/blog" },
    { name: "Liên hệ", href: "/contact" },
];

interface NavbarProps {
    siteName?: string;
    hotline?: string;
}

export function Navbar({ siteName = "Showroom Bedding", hotline = "0123456789" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled
                    ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
                    <motion.span
                        {...{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: SPRING_TRANSITION
                        } as any}
                        className="text-xl md:text-2xl font-bold font-sans tracking-tight text-primary"
                    >
                        {siteName}
                    </motion.span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative block"
                        >
                            <motion.span
                                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors duration-200 cursor-pointer block"
                                {...({
                                    whileHover: { scale: 1.05 },
                                    transition: SPRING_TRANSITION
                                } as any)}
                            >
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                    <motion.a
                        href={`tel:${hotline}`}
                        className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-light shadow-md cursor-pointer"
                        {...({
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            transition: SPRING_TRANSITION
                        } as any)}
                    >
                        <Phone size={14} />
                        <span>Gọi ngay</span>
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                    {...({
                        whileTap: { scale: 0.9 },
                        transition: SPRING_TRANSITION
                    } as any)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        {...{
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: "auto" },
                            exit: { opacity: 0, height: 0 },
                            transition: SPRING_TRANSITION
                        } as any}
                        className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.span
                                        className="block text-lg font-medium text-slate-900 hover:text-primary transition-colors duration-200 cursor-pointer"
                                        {...({
                                            whileHover: { x: 10 },
                                            transition: SPRING_TRANSITION
                                        } as any)}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                            <motion.a
                                href={`tel:${hotline}`}
                                className="flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-light transition-all duration-200 cursor-pointer"
                                {...({
                                    whileHover: { scale: 1.02 },
                                    whileTap: { scale: 0.98 },
                                    transition: SPRING_TRANSITION
                                } as any)}
                            >
                                <Phone size={18} />
                                <span>Gọi ngay: {hotline}</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
