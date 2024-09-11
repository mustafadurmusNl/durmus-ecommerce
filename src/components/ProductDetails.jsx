/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasketTotal } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams(); //useParams() returns route parameters as strings
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { title, price, description, category, image } = selectedProduct;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
const addBasket = () => {
    const payload = {
      id: parseInt(id),
      title,
      price,
      description,
      category,
      image,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasketTotal)

  };

 
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.find((product) => {
        if (product.id === parseInt(id)) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "30px" }}>
        <img src={image} alt={title} style={{ width: "300px" }} />
      </div>
      <div className="flex-column">
        <h1>{title}</h1>
        <p>{description}</p>
        <h1>${price}</h1>

        <div style={{ marginTop: "20px", fontSize: "40px" }}>
          <CiCirclePlus onClick={increment} />
          <span>{count}</span>
          <CiCircleMinus onClick={decrement} />
        </div>
        <div style={{ marginTop: "5px", fontSize: "70px" }}>
          <button
          onClick={addBasket}
            className="detail-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
