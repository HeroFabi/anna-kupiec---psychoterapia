import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'symptoms',
  title: 'Sekcja Objawy (Czy Często...)',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Tytuł sekcji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      title: 'Lista objawów',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
