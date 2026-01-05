import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/features/hero";
import { USP } from "@/components/home/usp";
import { ProductCard } from "@/components/features/product-card";
import { getFeaturedProducts } from "@/lib/sanity";
import { Product } from "@/lib/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function Home() {
    const featuredProducts: Product[] = await getFeaturedProducts();

    return (
        <>
            <Navbar />
            <main className="bg-slate-50">
                <Hero />
                <USP />

                {/* Featured Products */}
                <section id="featured-products" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-slate-900">Sản Phẩm Nổi Bật</h2>
                                <p className="text-slate-600">Những bộ sưu tập được khách hàng yêu thích nhất tại cửa hàng.</p>
                            </div>
                            <Link href="/products" className="hidden md:flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                                <span>Tất cả sản phẩm</span>
                                <ChevronRight size={20} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <Link href="/products" className="inline-flex items-center space-x-2 bg-white px-8 py-4 rounded-xl border border-slate-200 font-bold text-blue-600">
                                <span>Tất cả sản phẩm</span>
                                <ChevronRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto bg-blue-600 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-white">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Bạn còn phân vân chưa biết chọn loại nào?</h2>
                                <p className="text-blue-100 text-lg leading-relaxed mb-0">
                                    Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn để bạn chọn được chiếc đệm và bộ chăn ga ưng ý nhất.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                <Link href="/contact" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform">
                                    Liên hệ ngay
                                </Link>
                                <a href="https://zalo.me" className="px-10 py-5 bg-cyan-500 text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-2">
                                    <span>Chat Zalo</span>
                                </a>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
