import { defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    // Singleton: only one document of this type can exist (enforced via desk structure)
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'The name of your website',
        },
        {
            name: 'hotline',
            title: 'Hotline',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'Phone number for customer support',
        },
        {
            name: 'zaloUrl',
            title: 'Zalo URL',
            type: 'url',
            description: 'Link to your Zalo contact',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
            description: 'Physical address of the showroom',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Website logo',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'YouTube', value: 'youtube' },
                                    { title: 'TikTok', value: 'tiktok' },
                                    { title: 'Zalo', value: 'zalo' },
                                ],
                            },
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'platform',
                            subtitle: 'url',
                        },
                    },
                },
            ],
            description: 'Links to social media profiles',
        },
    ],
    preview: {
        select: {
            title: 'siteName',
            subtitle: 'hotline',
        },
    },
})
