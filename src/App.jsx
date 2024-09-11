import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";

import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateBasketTotal,removeFromBasket,setDrawer } from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasketTotal());
  }, [products,dispatch]);

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  className="flex-row"
                  key={product.id}
                >
                  <div className="flex-row">
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "70px" }}
                    />
                    <h1>
                      {product.title}({product.quantity})
                    </h1>
                    <h1>{product.price}$</h1>
                    <button 
                  onClick={() => dispatch(removeFromBasket(product.id))}
                    >delete</button>
                  </div>
                </div>

               
              </>
            ))}
            <div>
                  <h1>Total:{totalAmount}$</h1>
                </div>
        </Drawer>
      </PageContainer>
    </>
  );
}

export default App;
