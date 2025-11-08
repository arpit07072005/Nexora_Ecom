import styles from '../CSS/cart.module.css';
import { FiTrash2 } from 'react-icons/fi'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CartItem = ({ item }) => {
  const { name, brand, price, quantity, imageUrl ,id} = item;
const navigate =useNavigate();
const handledelete= async(id)=>{
try {
   await axios.delete(`https://nexora-ecom.onrender.com/api/cart/${id}`);
  console.log("deleted");
  toast.success("Item deleted");
  navigate(0);
}catch (error) {
  console.log(error)
  toast.error("Error during item deletion");
}
  }

  return (
    <div className={styles.cartItemCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.itemDetails}>
        <span className={styles.productName}>{name}</span>
        <span className={styles.productBrand}>{brand}</span>
        <span className={styles.productPriceInfo}>Price: ${price} x {quantity}</span>
      </div>
      <div className={styles.itemControls}>
        <div className={styles.quantitySelector}> 
          <span>{quantity}</span>
        </div>
        <button className={styles.deleteButton} onClick={()=>handledelete(id)}>
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;