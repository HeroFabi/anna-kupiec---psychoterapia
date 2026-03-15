import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Sekcja Hero (Start)',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Zdjęcie w tle',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Główny Nagłówek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Podtytuł',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Krótki opis',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'buttonText',
      title: 'Tekst przycisku',
      type: 'string',
    }),
  ],
})
