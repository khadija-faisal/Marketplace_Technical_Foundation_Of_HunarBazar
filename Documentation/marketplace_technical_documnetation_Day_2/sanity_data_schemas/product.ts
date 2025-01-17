// schematype/product.ts
export default  {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'stock',
        title: 'Stock Quantity',
        type: 'number'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }] // This links the product to the category
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }
  