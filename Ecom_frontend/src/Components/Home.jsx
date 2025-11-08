import React, { useEffect, useState } from "react";
import styles from "../CSS/home.module.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.productLayoutContainer}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
