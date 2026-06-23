export default {
  name: 'certification',
  title: 'Certifications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Certificate Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Issuing Body',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the actual certificate scan or logo',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
}
