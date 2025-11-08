import React, { useState } from 'react';
import axios from 'axios';
import styles from '../CSS/checkoutModal.module.css'; 
import { FiX, FiCheckCircle } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

const CheckoutModal = ({ isOpen, onClose, totalAmount }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [error, setError] = useState('');
  const [data ,setData]=useState();
  const navigate =useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields.');
      return;
    }
    try {
     const data= await axios.post('https://nexora-ecom.onrender.com/api/checkout',formData);
     console.log(data.data);
     setData(data.data);
     setIsOrderPlaced(true);
    } catch (err) {
      console.error('Order placement failed:', err);
      setError('Failed to place order. Please try again.');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsOrderPlaced(false);
      setFormData({ name: '', email: '' });
      setError('');
      navigate(0)
    }, 300);
  };


  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeButton} onClick={handleClose}>
          <FiX size={24} />
        </button>
        {isOrderPlaced ? (
          <div className={styles.successView}>
            <FiCheckCircle size={60} className={styles.successIcon} />
            <h2>{data.message}</h2>
            <p>`Thank you for your purchase. {data.customer}`</p>
            <p className={styles.summaryText}>Total Paid: <strong>{data.totalAmount}</strong></p>
             <p><strong>Timestamp:</strong> {data.timestamp}</p>
            <p className={styles.summaryText}>Est. Delivery: 2-3 business days</p>
            <button className={styles.submitButton} onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Checkout</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
              <button type="submit" className={styles.submitButton}>
                Place Order
              </button>
            </form>
            {error && <p className={styles.errorText}>{error}</p>}
            <div className={styles.summaryText}>
              <p>Total Price: ${totalAmount}</p>
              <p>Estimated Delivery: 2-3 business days</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;