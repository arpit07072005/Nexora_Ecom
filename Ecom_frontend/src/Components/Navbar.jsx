import { Link } from 'react-router-dom';
import styles from '../CSS/navbar.module.css';
import { FiShoppingCart } from 'react-icons/fi'; 

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Nexora Commerce</div>
        <ul className={styles.navLinks}>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        <div className={styles.cartIcon}>
          <li><Link to="/cart"><FiShoppingCart size={24} /></Link></li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;