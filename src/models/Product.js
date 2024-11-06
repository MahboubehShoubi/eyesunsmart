import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    firstCategory: {
      type: String,
      required: true,
    },
    secondCategory: {
      type: String,
      required: true,
    },
    thirdCategory: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productIndexImage: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
