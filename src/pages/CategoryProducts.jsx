/* eslint-disable no-unused-vars */
// src/pages/CategoryProducts.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryProducts.css"; // Import the CSS file

function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products based on the selected category
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products in {category}</h1>
      <ul className="category-products">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <Link to={`/product-details/${product.id}`}>
              <img className="product-img" src={product.image} alt={product.title} />
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryProducts;
