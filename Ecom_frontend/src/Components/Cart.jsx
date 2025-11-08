import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../CSS/cart.module.css';
import Navbar from './Navbar';
import CartItem from './CartItem';
import CheckoutModal from './CheckoutModel';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('https://nexora-ecom.onrender.com/api/cart');
        setCartItems(res.data?.cart || []);
        setTotalAmount(res.data?.totalAmount || 0);
        console.log(res.data.cart);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };
    fetchCart();
  }, []);

  const shipping = totalAmount > 0 ? 10 : 0;
  const finalTotal = totalAmount + shipping;

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h2 className={styles.pageTitle}>
          Your Cart ({cartItems?.length || 0} items)
        </h2>

        <div className={styles.cartLayout}>
          <section className={styles.cartItemsList}>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item._id}
                  item={{
                    id: item._id,
                    name: item.productId?.name,
                    brand: item.productId?.brand,
                    price: item.productId?.price,
                    quantity: item.quantity,
                    imageUrl: item.productId?.image
                  }}
                />
              ))
            )}
          </section>
          <aside className={styles.orderSummary}>
            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${totalAmount}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>

              <hr className={styles.divider} />

              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${finalTotal}</span>
              </div>

              <button
                className={styles.checkoutButton}
                onClick={() => setIsModalOpen(true)}
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      </main>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalAmount={finalTotal}
        cartItems={cartItems}
      />
    </div>
  );
};

export default CartPage;
