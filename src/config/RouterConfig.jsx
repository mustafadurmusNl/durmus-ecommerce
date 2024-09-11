// src/config/RouterConfig.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import CategoryProducts from "../pages/CategoryProducts"; // This component will show products by category

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/category/:category" element={<CategoryProducts />} />
    </Routes>
  );
}

export default RouterConfig;
