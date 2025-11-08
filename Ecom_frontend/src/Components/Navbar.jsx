import styles from '../CSS/navbar.module.css';
import { FiShoppingCart } from 'react-icons/fi'; 

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Nexora Commerce</div>
        <ul className={styles.navLinks}>
          <li><a href="/" >Home</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
        <div className={styles.cartIcon}>
          <li><a href="/cart"><FiShoppingCart size={24} /></a></li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;