/* eslint-disable no-unused-vars */
// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Categories</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {categories.map((category) => (
          <li key={category} style={{ margin: "10px 0" }}>
            <Link
              to={`/category/${category}`}
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontSize: "18px",
                border: "1px solid #ddd",
                padding: "8px 12px",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>

      <h2>All Products</h2>
      <ProductList />
    </div>
  );
}

export default Home;
