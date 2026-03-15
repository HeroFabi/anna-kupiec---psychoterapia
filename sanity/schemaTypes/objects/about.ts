import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Sekcja O Mnie',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Zdjęcie terapeuty',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Tytuł sekcji (O MNIE)',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podtytuł (Doświadczenie zawodowe:)',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Akapity opisowe',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'bulletListTitle',
      title: 'Tytuł listy (UKOŃCZYŁAM)',
      type: 'string',
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Lista ukończonych kursów',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
