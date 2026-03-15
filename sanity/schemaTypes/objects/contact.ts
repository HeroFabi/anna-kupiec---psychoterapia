import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Sekcja Kontakt',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Wynagłówek Kontakt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleMapsLink',
      title: 'Link do map Google',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Nr Telefonu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
