import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import post from './post'
import siteSettings from './siteSettings'
import homePage from './homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, product, post],
}
