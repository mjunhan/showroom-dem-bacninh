import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'googleMapsUrl',
            title: 'Google Maps Embed URL',
            type: 'text',
            description: 'The src attribute from the Google Maps iframe',
            rows: 3,
        }),
        defineField({
            name: 'operatingHours',
            title: 'Operating Hours',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Contact Page',
            }
        },
    },
})
