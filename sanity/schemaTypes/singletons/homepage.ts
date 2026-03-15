import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Strona Główna',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Start' },
    { name: 'about', title: 'O Mnie' },
    { name: 'specializations', title: 'Specjalizacje' },
    { name: 'methods', title: 'Metody Pracy' },
    { name: 'symptoms', title: 'Objawy' },
    { name: 'pricing', title: 'Cennik' },
    { name: 'forWhom', title: 'Dla Kogo' },
    { name: 'contact', title: 'Kontakt' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Sekcja Hero',
      type: 'hero',
      group: 'hero',
    }),
    defineField({
      name: 'about',
      title: 'Sekcja O Mnie',
      type: 'about',
      group: 'about',
    }),
    defineField({
      name: 'specializations',
      title: 'Sekcja Specjalizacje',
      type: 'specializations',
      group: 'specializations',
    }),
    defineField({
      name: 'methods',
      title: 'Sekcja Metody Pracy',
      type: 'methods',
      group: 'methods',
    }),
    defineField({
      name: 'symptoms',
      title: 'Sekcja Objawy',
      type: 'symptoms',
      group: 'symptoms',
    }),
    defineField({
      name: 'pricing',
      title: 'Sekcja Cennik',
      type: 'pricing',
      group: 'pricing',
    }),
    defineField({
      name: 'forWhom',
      title: 'Sekcja Dla Kogo',
      type: 'forWhom',
      group: 'forWhom',
    }),
    defineField({
      name: 'contact',
      title: 'Sekcja Kontakt',
      type: 'contact',
      group: 'contact',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Zawartość Strony Głównej',
      }
    },
  },
})
