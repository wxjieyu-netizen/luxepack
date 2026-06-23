export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Pouch & Bag', value: 'pouch-bag' },
          { title: 'Box', value: 'box' },
          { title: 'Cleaning Cloth', value: 'cleaning-cloth' },
          { title: 'Ribbon & Tags', value: 'ribbon-tags' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'isHot',
      title: 'Hot Product',
      type: 'boolean',
      description: 'Show in Hot Products section (2×3 grid)',
      initialValue: false,
    },
    {
      name: 'isNew',
      title: 'New Arrival',
      type: 'boolean',
      description: 'Show in New Arrivals section (1×4 grid)',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'applications',
      title: 'Applications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}
