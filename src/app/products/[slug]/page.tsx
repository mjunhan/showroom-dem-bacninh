import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "./product-detail-client";
import { formatVND } from "@/lib/utils";
import { getProductBySlug, getFeaturedProducts, urlFor } from "@/lib/sanity";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: "Sản phẩm không tồn tại",
        };
    }

    const title = `${product.name} - Giá tốt tại Bắc Ninh`;
    const description = `Mua ${product.name} chính hãng, giá rẻ nhất Bắc Ninh. Bảo hành dài hạn. Xem ngay!`;
    const priceTag = product.price > 0 ? `Giá: ${formatVND(product.price)}` : "Liên hệ báo giá";

    const imageUrl = product.image ? (typeof product.image === 'string' ? product.image : urlFor(product.image).url()) : '';

    return {
        title,
        description,
        openGraph: {
            title,
            description: `${priceTag}. Miễn phí vận chuyển Bắc Ninh.`,
            images: [
                {
                    url: imageUrl,
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
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    // For related products, we can just fetch featured ones for now
    const relatedProducts = await getFeaturedProducts();

    return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
