import mongoose, { Schema } from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    _id: { type: String, require: true, unique: true },
    userId: String,
    products: [
      {
        title: { type: String, require: true },
        amount: { type: Number, require: true },
        price: { type: Number, require: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        orderDate: { type: Date, require: true },
        devliveryAddress: { type: String, require: true },
        dispatched: { type: Boolean, require: true },
        dispatchDate: { type: Date },
        delivered: { type: Boolean, require: true },
        deliveryDate: { type: Date },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
