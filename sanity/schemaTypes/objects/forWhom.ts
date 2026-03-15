import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'forWhom',
  title: 'Sekcja Dla Kogo',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Kafelki (od lewej do prawej)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'image', title: 'Zdjęcie', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
            defineField({ name: 'description', title: 'Opis (paragraf)', type: 'text', rows: 4 }),
            defineField({ 
              name: 'list', 
              title: 'Lista punktów (np. rodzaje psychoterapii)', 
              type: 'array', 
              of: [{ type: 'string' }] 
            }),
            defineField({ name: 'buttonText', title: 'Tekst przycisku (opcjonalnie)', type: 'string' }),
            defineField({ name: 'buttonLink', title: 'Link przycisku (opcjonalnie)', type: 'string' }),
            defineField({ name: 'highlightedFooter', title: 'Wyróżniony tekst na dole', type: 'string' }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
})
