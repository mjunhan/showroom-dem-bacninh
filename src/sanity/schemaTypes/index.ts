import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import post from './post'
import siteSettings from './siteSettings'
import homePage from './homePage'

import contactPage from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, contactPage, product, post],
}
