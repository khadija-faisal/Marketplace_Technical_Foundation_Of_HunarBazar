// schematype/shipment.ts
export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }]  // Reference to the Order schema
      },
      {
        name: 'shipmentStatus',
        title: 'Shipment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Shipped', 'In Transit', 'Delivered', 'Failed'],
          layout: 'radio'
        }
      },
      {
        name: 'deliveryZone',
        title: 'Delivery Zone',
        type: 'string',
        description: 'Zone where the shipment is to be delivered'
      },
      {
        name: 'assignedDriver',
        title: 'Assigned Driver',
        type: 'string',
        description: 'Driver assigned for the delivery'
      },
      {
        name: 'expectedDeliveryDate',
        title: 'Expected Delivery Date',
        type: 'datetime'
      }
    ]
  }
  