import "../css/header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

import Badge from "@mui/material/Badge";

function Header() {
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(false);
  const root = document.getElementById("root");
  const changeTheme = () => {
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img
          className="logo"
          src="./src/images/eCommerce-logo.jpg"
          alt="cart"
        />
        <p className="logo-text">My E-Commerce by Durmus</p>
      </div>
      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Search" />
        <div className="flex-row">
          {theme ? (
            <CiLight className="icon" onClick={changeTheme} />
          ) : (
            <FaMoon className="icon" onClick={changeTheme} />
          )}
          <Badge
            className="icon"
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="primary"
          >
            <CiShoppingBasket className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
