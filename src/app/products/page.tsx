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
            <main className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Danh Mục Sản Phẩm</h1>
                        <p className="text-slate-600">Tìm kiếm sản phẩm hoàn hảo cho giấc ngủ của bạn.</p>
                    </div>

                    <ProductList products={products} />
                </div>
            </main>
            <Footer />
        </>
    );
}
