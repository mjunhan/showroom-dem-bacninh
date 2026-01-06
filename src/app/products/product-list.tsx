"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/features/product-card";
import { Product } from "@/lib/data";
import { Filter, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["Tất cả", "Đệm", "Chăn Ga", "Gối", "Phụ Kiện"];
const priceRanges = [
    { label: "Tất cả", min: 0, max: Infinity },
    { label: "Dưới 2 triệu", min: 0, max: 2000000 },
    { label: "2 - 5 triệu", min: 2000000, max: 5000000 },
    { label: "5 - 10 triệu", min: 5000000, max: 10000000 },
    { label: "Trên 10 triệu", min: 10000000, max: Infinity },
];

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    const [activeCategory, setActiveCategory] = useState("Tất cả");
    const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchesCategory = activeCategory === "Tất cả" || p.category === activeCategory;
            const matchesPrice = p.price >= activePriceRange.min && p.price <= activePriceRange.max;
            return matchesCategory && matchesPrice;
        });
    }, [activeCategory, activePriceRange, products]);

    return (
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-32 space-y-12">
                    <div>
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 px-5">
                            Danh mục
                        </h3>
                        <div className="space-y-1.5">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "w-full text-left px-5 py-4 rounded-lg transition-all font-bold text-xs uppercase tracking-widest border",
                                        activeCategory === cat
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/10"
                                            : "bg-white text-slate-500 border-transparent hover:border-primary/20 hover:bg-secondary/30"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 px-5">
                            Khoảng giá
                        </h3>
                        <div className="space-y-1.5">
                            {priceRanges.map((range) => (
                                <button
                                    key={range.label}
                                    onClick={() => setActivePriceRange(range)}
                                    className={cn(
                                        "w-full text-left px-5 py-4 rounded-lg transition-all font-bold text-xs uppercase tracking-widest border",
                                        activePriceRange.label === range.label
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/10"
                                            : "bg-white text-slate-500 border-transparent hover:border-primary/20 hover:bg-secondary/30"
                                    )}
                                >
                                    {range.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-12">
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="flex items-center justify-between w-full bg-white px-6 py-5 rounded-lg border border-primary/5 font-bold text-slate-900 shadow-sm"
                >
                    <div className="flex items-center space-x-3">
                        <Filter size={18} className="text-primary" />
                        <span className="text-sm uppercase tracking-widest">Bộ lọc</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] font-bold text-primary uppercase tracking-widest bg-secondary/50 px-3 py-1.5 rounded-lg">
                        <span>{activeCategory}</span>
                        <ChevronDown size={14} />
                    </div>
                </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product._id}
                                    {...{
                                        layout: true,
                                        initial: { opacity: 0, scale: 0.98 },
                                        animate: { opacity: 1, scale: 1 },
                                        exit: { opacity: 0, scale: 0.98 },
                                        transition: { duration: 0.3 }
                                    } as any}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        {...{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 }
                        } as any}
                        className="bg-white rounded-lg p-20 text-center border border-dashed border-primary/10"
                    >
                        <p className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-widest">Không tìm thấy sản phẩm</p>
                        <p className="text-slate-400 font-medium">Vui lòng thử chọn bộ lọc khác.</p>
                        <button
                            onClick={() => {
                                setActiveCategory("Tất cả");
                                setActivePriceRange(priceRanges[0]);
                            }}
                            className="mt-8 text-primary font-bold hover:text-accent transition-colors text-sm uppercase tracking-widest"
                        >
                            Xóa bộ lọc
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {isMobileFilterOpen && (
                    <>
                        <motion.div
                            {...{
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 }
                            } as any}
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[100]"
                        />
                        <motion.div
                            {...{
                                initial: { y: "100%" },
                                animate: { y: 0 },
                                exit: { y: "100%" },
                                transition: { type: "spring", damping: 30, stiffness: 300 }
                            } as any}
                            className="fixed bottom-0 left-0 right-0 bg-white z-[110] rounded-t-lg p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-2xl font-bold font-playfair text-slate-900 tracking-tight">Bộ lọc sản phẩm</h3>
                                <button onClick={() => setIsMobileFilterOpen(false)} className="p-3 bg-secondary/50 rounded-lg text-slate-400 hover:text-primary transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-12 pb-10">
                                <div>
                                    <p className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-6">Danh mục</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={cn(
                                                    "px-5 py-4 rounded-lg transition-all font-bold text-xs uppercase tracking-widest border",
                                                    activeCategory === cat
                                                        ? "bg-primary text-white border-primary"
                                                        : "bg-secondary/30 text-slate-600 border-transparent"
                                                )}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-6">Khoảng giá</p>
                                    <div className="grid grid-cols-1 gap-3">
                                        {priceRanges.map((range) => (
                                            <button
                                                key={range.label}
                                                onClick={() => setActivePriceRange(range)}
                                                className={cn(
                                                    "w-full text-left px-5 py-4 rounded-lg transition-all font-bold text-xs uppercase tracking-widest border",
                                                    activePriceRange.label === range.label
                                                        ? "bg-primary text-white border-primary"
                                                        : "bg-secondary/30 text-slate-600 border-transparent"
                                                )}
                                            >
                                                {range.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsMobileFilterOpen(false)}
                                    className="w-full py-5 bg-primary text-white rounded-lg font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95 transition-all"
                                >
                                    Xem {filteredProducts.length} kết quả
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
