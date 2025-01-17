// schematype/customer.ts
export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Customer Name',
        type: 'string'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'contact',
        title: 'Contact Number',
        type: 'string'
      },
      {
        name: 'address',
        title: 'Shipping Address',
        type: 'text'
      },
      {
        name: 'orderHistory',
        title: 'Order History',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'order' }] }]
      }
    ]
  }
  