import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Sekcja Cennik',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł sekcji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'packages',
      title: 'Lista cen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Nazwa usługi', type: 'string' }),
            defineField({ name: 'price', title: 'Cena', type: 'string' }),
            defineField({ name: 'duration', title: 'Czas trwania', type: 'string' }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionParagraphs',
      title: 'Opis pod cennikiem',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    defineField({
      name: 'highlightedText',
      title: 'Wyróżniony tekst (np. online)',
      type: 'string',
    }),
  ],
})
