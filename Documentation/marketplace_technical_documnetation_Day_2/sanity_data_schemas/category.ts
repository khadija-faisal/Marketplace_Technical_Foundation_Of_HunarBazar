// schematype/category.js
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Category Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }
  