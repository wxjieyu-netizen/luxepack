export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'International format e.g. 8613801514296',
    },
    {
      name: 'officeAddress',
      title: 'Office Address',
      type: 'text',
      rows: 2,
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'partnerImage',
      title: 'Partner Brands Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The brand logo strip shown in Our Partners section',
    },
    {
      name: 'stats',
      title: 'Stats Bar (Hero footer)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
}
