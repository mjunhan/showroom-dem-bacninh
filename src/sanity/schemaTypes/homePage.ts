import { defineType } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    // Singleton: only one document of this type can exist (enforced via desk structure)
    fields: [
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'The main headline text on the homepage',
        },
        {
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
            description: 'The description text below the headline',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
            description: 'The background/banner image for the hero section',
        },
        {
            name: 'heroButtonText',
            title: 'Hero Button Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'Text for the call-to-action button (e.g., "Mua ngay")',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            description: 'Emoji or icon character (e.g., 🚚, 🛡️, 💳)',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 2,
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                        },
                    },
                },
            ],
            description: 'Features like "Free Shipping", "Warranty", etc.',
        },
    ],
    preview: {
        select: {
            title: 'heroTitle',
            subtitle: 'heroSubtitle',
            media: 'heroImage',
        },
    },
})
