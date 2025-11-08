import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    }

}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);