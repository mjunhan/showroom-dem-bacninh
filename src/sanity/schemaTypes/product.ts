import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Sản Phẩm',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Tên Sản Phẩm',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Giá (VND)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'originalPrice',
            title: 'Giá Gốc (nếu có)',
            type: 'number',
        }),
        defineField({
            name: 'image',
            title: 'Hình ảnh',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Danh mục',
            type: 'string',
            options: {
                list: [
                    { title: 'Đệm', value: 'Đệm' },
                    { title: 'Chăn Ga', value: 'Chăn Ga' },
                    { title: 'Gối', value: 'Gối' },
                    { title: 'Phụ Kiện', value: 'Phụ Kiện' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Trạng thái',
            type: 'string',
            options: {
                list: [
                    { title: 'Còn hàng', value: 'Còn hàng' },
                    { title: 'Hết hàng', value: 'Hết hàng' },
                    { title: 'Liên hệ', value: 'Liên hệ' },
                ],
            },
            initialValue: 'Còn hàng',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'brand',
            title: 'Thương hiệu',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Mô tả',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'specs',
            title: 'Thông số kỹ thuật',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'category',
        },
    },
})
