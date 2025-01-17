// schematype/payment.ts
export default {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }]  // Reference to the Order schema
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: ['Credit Card', 'Debit Card', 'Cash on Delivery', 'Online Payment'],
          layout: 'radio'
        }
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Completed', 'Failed', 'Refunded'],
          layout: 'radio'
        }
      },
      {
        name: 'transactionId',
        title: 'Transaction ID',
        type: 'string',
        description: 'Unique identifier for the payment transaction'
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        description: 'Total amount paid for the order'
      }
    ]
  }
  