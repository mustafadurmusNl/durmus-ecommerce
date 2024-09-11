/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, title, price, description, category, image } = product;

  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{category}</p>
      </div>
      <div>
        <button
          className="detail-button"
          onClick={() => navigate("/product-details/" + id)}
        >
          view detail
        </button>
      </div>
    </div>
  );
}

export default Product;
