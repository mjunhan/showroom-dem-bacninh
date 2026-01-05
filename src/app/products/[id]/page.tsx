import { Metadata } from "next";
import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductDetailClient from "./product-detail-client";
import { formatVND } from "@/lib/utils";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.slug === id);

    if (!product) {
        return {
            title: "Sản phẩm không tồn tại",
        };
    }

    const title = `${product.name} - Giá tốt tại Bắc Ninh`;
    const description = `Mua ${product.name} chính hãng, giá rẻ nhất Bắc Ninh. Bảo hành dài hạn. Xem ngay!`;
    const priceTag = product.price > 0 ? `Giá: ${formatVND(product.price)}` : "Liên hệ báo giá";

    return {
        title,
        description,
        openGraph: {
            title,
            description: `${priceTag}. Miễn phí vận chuyển Bắc Ninh.`,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
            type: "website",
        },
    };
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.slug === id);

    if (!product) {
        notFound();
    }

    const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
