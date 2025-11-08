
import { Product } from "../Model/products.model.js";
import { Cart } from "../Model/cart.model.js";

const products = async (req,res)=>{
    try {
        const data = await Product.find();
        res.status(200).json({data});     
    } catch (error) {
       res.status(500).json({erroe:"product not found"});
    }
}

const addcart = async (req,res)=>{
    const {productId,quantity}= req.body
    try {
        if(!productId){
            res.status(400).json({mess:"product id is required"});
        }

        const existproduct= await Cart.findOne({productId});
        if(existproduct){
            existproduct.quantity+=quantity;
            await existproduct.save();
          return  res.status(200).json({message:"quantity of product is added"});
        }

        await Cart.create({
            productId:productId,
            quantity:quantity
        })
res.status(200).json({message:"product added to cart"});
    } catch (error) {
        res.status(500).json({err:error});
    }
}

const cart = async (req,res)=>{
    try {
        const data = await Cart.find().populate('productId');
        if(data.length==0){
         return   res.status(200).json({mess:"Cart is empty"});
        }
        const totalAmount=data.reduce((acc,item)=>{
         return acc + (item.productId.price * item.quantity)
        },0)
        res.status(200).json({cart:data,totalAmount:totalAmount.toFixed(2)})
    } catch (error) {
         console.error(error);
        res.status(500).json({err:error});
    }
}
const deleteCart = async (req,res)=>{
    const {id}=req.params;
    try {
        const deleteitem = await Cart.findByIdAndDelete(id);
        if(!deleteitem){
        return res.status(400).json({mess:"item not found"});
        }

        res.status(200).json({mes:"item deleted"});
    } catch (error) {
        res.status(500).json({err:error});
    }
}
const checkout = async (req,res)=>{
const {name,email}=req.body;
if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

     const cartItems = await Cart.find().populate("productId");

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );
    await Cart.deleteMany();
    res.status(200).json({
      message: "Checkout successful",
      customer: name,
      email: email,
      totalAmount: totalAmount.toFixed(2),
      items: cartItems,
      timestamp: new Date(),
    });

}
export {products,addcart,cart,deleteCart,checkout}