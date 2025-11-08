
import { Product } from "../Model/products.model.js"
const product = [
  {
    "name": "Mens Casual Shirt",
    "price": 35.99,
    "brand": "H&M",
    "description": "Classic fit men's check shirt.",
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    "name": "Mens Leather Watch",
    "price": 89.99,
    "brand": "Fossil",
    "description": "Premium leather strap analog watch.",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    "name": "Women Party Dress",
    "price": 79.99,
    "brand": "Zara",
    "description": "Elegant evening party dress.",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b"
  },
  {
    "name": "Women Summer Dress",
    "price": 49.99,
    "brand": "Forever 21",
    "description": "Lightweight summer dress.",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
  },
  {
    "name": "Women Handbag",
    "price": 99.99,
    "brand": "Michael Kors",
    "description": "Premium leather handbag.",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  },
  {
    "name": "Women Shoulder Bag",
    "price": 69.99,
    "brand": "Gucci",
    "description": "Stylish branded shoulder bag.",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1525909002-1b05e0c869d8"
  },
  {
    "name": "Women Tote Bag",
    "price": 59.99,
    "brand": "Prada",
    "description": "Spacious tote bag with premium look.",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  }
]


const addProducts = async (req,res)=>{
try {
    await Product.deleteMany();
    await Product.insertMany(product);
    res.json({message:"data added"});
} catch (error) {
    res.json({err:"not added"});
}

}
export {addProducts}