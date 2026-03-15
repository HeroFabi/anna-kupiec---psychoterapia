import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'specializations',
  title: 'Sekcja Specjalizacje',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł sekcji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      title: 'Lista specjalizacji',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie obok listy',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
