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
                <div className="sticky top-32 space-y-10">
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                            <Filter size={20} className="text-blue-600" />
                            <span>Lọc theo danh mục</span>
                        </h3>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "w-full text-left px-5 py-3 rounded-xl transition-all font-medium border",
                                        activeCategory === cat
                                            ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                                            : "bg-white text-slate-600 border-slate-100 hover:border-blue-200 hover:bg-blue-50/50"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                            <span>Khoảng giá</span>
                        </h3>
                        <div className="space-y-2">
                            {priceRanges.map((range) => (
                                <button
                                    key={range.label}
                                    onClick={() => setActivePriceRange(range)}
                                    className={cn(
                                        "w-full text-left px-5 py-3 rounded-xl transition-all font-medium border",
                                        activePriceRange.label === range.label
                                            ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                                            : "bg-white text-slate-600 border-slate-100 hover:border-blue-200 hover:bg-blue-50/50"
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
            <div className="lg:hidden mb-8">
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="flex items-center justify-between w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 font-bold text-slate-900 shadow-sm"
                >
                    <div className="flex items-center space-x-2">
                        <Filter size={20} className="text-blue-600" />
                        <span>Lọc sản phẩm</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-blue-600">
                        <span>{activeCategory} • {activePriceRange.label}</span>
                        <ChevronDown size={16} />
                    </div>
                </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product._id}
                                    {...{
                                        layout: true,
                                        initial: { opacity: 0, scale: 0.9 },
                                        animate: { opacity: 1, scale: 1 },
                                        exit: { opacity: 0, scale: 0.9 },
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
                        className="bg-white rounded-[2.5rem] p-20 text-center border border-dashed border-slate-200"
                    >
                        <p className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy sản phẩm</p>
                        <p className="text-slate-400">Vui lòng thử chọn bộ lọc khác.</p>
                        <button
                            onClick={() => {
                                setActiveCategory("Tất cả");
                                setActivePriceRange(priceRanges[0]);
                            }}
                            className="mt-8 text-blue-600 font-bold hover:underline"
                        >
                            Xóa tất cả bộ lọc
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
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                        />
                        <motion.div
                            {...{
                                initial: { y: "100%" },
                                animate: { y: 0 },
                                exit: { y: "100%" },
                                transition: { type: "spring", damping: 25, stiffness: 200 }
                            } as any}
                            className="fixed bottom-0 left-0 right-0 bg-white z-[110] rounded-t-[2.5rem] p-8 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold font-playfair">Bộ lọc sản phẩm</h3>
                                <button onClick={() => setIsMobileFilterOpen(false)} className="p-3 bg-slate-100 rounded-full text-slate-400">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-10 pb-10">
                                <div>
                                    <p className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-4">Danh mục</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={cn(
                                                    "px-5 py-4 rounded-2xl transition-all font-bold text-base border",
                                                    activeCategory === cat
                                                        ? "bg-blue-600 text-white border-blue-600"
                                                        : "bg-slate-50 text-slate-600 border-slate-50"
                                                )}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-4">Khoảng giá</p>
                                    <div className="grid grid-cols-1 gap-3">
                                        {priceRanges.map((range) => (
                                            <button
                                                key={range.label}
                                                onClick={() => setActivePriceRange(range)}
                                                className={cn(
                                                    "w-full text-left px-5 py-4 rounded-2xl transition-all font-bold text-base border",
                                                    activePriceRange.label === range.label
                                                        ? "bg-blue-600 text-white border-blue-600"
                                                        : "bg-slate-50 text-slate-600 border-slate-50"
                                                )}
                                            >
                                                {range.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsMobileFilterOpen(false)}
                                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20"
                                >
                                    Xem kết quả ({filteredProducts.length})
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
