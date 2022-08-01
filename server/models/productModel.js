import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  title: { type: String, require: true },
  body: { type: String, require: true },
  rating: { type: Number, require: true },
  size: { type: Number, require: true },
});

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    categories: [String],
    images: [String],
    description: { type: String },
    reviews: [reviewSchema],
    rating: { type: Number },
    ratedSize: { type: Number },
    reviewCount: { type: Number },
    sizes: {
      type: Object,
    },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
