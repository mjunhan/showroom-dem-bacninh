import { client } from '../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// Singleton: Site Settings
export async function getSiteSettings() {
    return await client.fetch(
        `*[_type == "siteSettings"][0] {
            siteName,
            hotline,
            zaloUrl,
            address,
            logo,
            socialLinks
        }`
    )
}

// Singleton: Home Page
export async function getHomePage() {
    return await client.fetch(
        `*[_type == "homePage"][0] {
            heroTitle,
            heroSubtitle,
            heroImage,
            heroButtonText,
            features
        }`
    )
}

export async function getProducts() {
    return await client.fetch(`*[_type == "product"] | order(_createdAt desc)`)
}

export async function getFeaturedProducts() {
    return await client.fetch(`*[_type == "product"][0...4] | order(_createdAt desc)`)
}

export async function getProductBySlug(slug: string) {
    return await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]`,
        { slug }
    )
}

export async function getPosts() {
    return await client.fetch(
        `*[_type == "post"] | order(publishedAt desc) {
            title,
            "slug": slug.current,
            mainImage,
            excerpt,
            publishedAt
        }`
    )
}

export async function getPost(slug: string) {
    return await client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            mainImage,
            publishedAt,
            excerpt,
            body
        }`,
        { slug }
    )
}
