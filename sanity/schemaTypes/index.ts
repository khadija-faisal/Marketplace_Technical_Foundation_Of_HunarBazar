import { type SchemaTypeDefinition } from 'sanity'


import { category } from './category'

import { sale } from './sale'
import { Products } from './products'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ category,  sale, Products, orderType],
}
