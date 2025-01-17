// schematype/order.ts
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }]
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }]
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number'
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
        options: {
          list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
          layout: 'radio'
        }
      },
      {
        name: 'payment',
        title: 'Payment',
        type: 'reference',
        to: [{ type: 'payment' }]
      },
      {
        name: 'shipment',
        title: 'Shipment',
        type: 'reference',
        to: [{ type: 'shipment' }]
      }
    ]
  }
  