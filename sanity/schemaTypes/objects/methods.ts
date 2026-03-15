import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'methods',
  title: 'Sekcja Metody Pracy',
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
      title: 'Metody pracy',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Nazwa metody', type: 'string' }),
            defineField({ name: 'description', title: 'Opis', type: 'text', rows: 5 }),
            defineField({ name: 'linkHref', title: 'Link do podstrony', type: 'string' }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
