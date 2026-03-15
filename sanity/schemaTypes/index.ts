import { type SchemaTypeDefinition } from 'sanity'

import hero from './objects/hero'
import about from './objects/about'
import specializations from './objects/specializations'
import methods from './objects/methods'
import symptoms from './objects/symptoms'
import pricing from './objects/pricing'
import forWhom from './objects/forWhom'
import contact from './objects/contact'

import homepage from './singletons/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    about,
    specializations,
    methods,
    symptoms,
    pricing,
    forWhom,
    contact,
    homepage,
  ],
}
