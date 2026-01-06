import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getProducts } from "@/lib/sanity";
import { ProductList } from "./product-list";

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <>
            <Navbar />
            <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 bg-secondary min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg p-12 md:p-16 border border-primary/5 shadow-sm mb-12 flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-slate-900 tracking-tight">
                            Danh Mục <span className="text-primary italic">Sản Phẩm</span>
                        </h1>
                        <div className="w-16 h-1 bg-accent/30 rounded-full mb-8"></div>
                        <p className="text-slate-500 font-medium text-lg max-w-2xl">
                            Tìm kiếm sản phẩm hoàn hảo cho giấc ngủ của bạn từ bộ sưu tập cao cấp của chúng tôi.
                        </p>
                    </div>

                    <ProductList products={products} />
                </div>
            </main>
            <Footer />
        </>
    );
}
