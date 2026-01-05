import { MetadataRoute } from "next";
import { PRODUCTS, POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://bedding-bacninh.com"; // Placeholder domain

    // Products
    const productUrls = PRODUCTS.map((p) => ({
        url: `${baseUrl}/products/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Posts (Blog)
    const blogUrls = POSTS.map((p) => ({
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Static Pages
    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.5,
        },
    ];

    return [...staticUrls, ...productUrls, ...blogUrls];
}
