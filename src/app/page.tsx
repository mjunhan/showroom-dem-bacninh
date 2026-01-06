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
            <main className="bg-secondary min-h-screen">
                <Hero />
                <USP />

                {/* Featured Products */}
                <section id="featured-products" className="py-24 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-16">
                            <div className="text-left">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-slate-900 tracking-tight">Sản Phẩm Nổi Bật</h2>
                                <p className="text-slate-500 font-medium">Những bộ sưu tập được khách hàng yêu thích nhất tại cửa hàng.</p>
                            </div>
                            <Link href="/products" className="hidden md:flex items-center space-x-2 text-primary font-bold hover:text-primary-dark transition-colors duration-200 cursor-pointer">
                                <span>Tất cả sản phẩm</span>
                                <ChevronRight size={20} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-stretch">
                            {featuredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <Link href="/products" className="inline-flex items-center space-x-2 bg-white px-8 py-4 rounded-xl border border-slate-200 font-bold text-primary hover:bg-slate-50 transition-all duration-200 cursor-pointer">
                                <span>Tất cả sản phẩm</span>
                                <ChevronRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 bg-secondary">
                    <div className="max-w-7xl mx-auto bg-primary rounded-lg p-12 md:p-24 relative overflow-hidden text-left">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                            <div className="max-w-xl text-white">
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair leading-tight">Bạn còn phân vân chưa biết chọn loại nào?</h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-0 font-medium">
                                    Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn để bạn chọn được chiếc đệm và bộ chăn ga ưng ý nhất.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full md:w-auto">
                                <Link href="/contact" className="px-12 py-5 bg-accent text-primary rounded-lg font-bold shadow-lg hover:bg-accent/90 transition-all duration-300 text-center uppercase tracking-widest text-sm">
                                    Liên hệ ngay
                                </Link>
                                <a href="https://zalo.me" className="px-12 py-5 bg-white/10 text-white rounded-lg font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 text-center uppercase tracking-widest text-sm">
                                    Chat Zalo
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
