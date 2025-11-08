import React from "react";
import styles from "../CSS/productCard.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { image, name, brand, price} = product;
  const id = product._id;
const handlecart= async (id)=>{
try {
   const response = await axios.post("https://nexora-ecom.onrender.com/api/cart",{productId:id,quantity:1});
   toast.success("Added to cart");
   console.log("cart is added",response.data);
} catch (error) {
  toast.error("item not added to cart")
  console.log("item not added to cart")
}
}
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productBrand}>{brand}</p>
        <span className={styles.productPrice}>${price}</span>
        <button className={styles.cartButton} onClick={()=>handlecart(id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
