import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import "./App.css";
import Cart from "./component/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./component/data";

const App = () => {
  const [productId, setProudctId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {

    const filteredObject = productList.filter(
      (product) => product.id == productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);

  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Header cartAllProduct={cartAllProduct}/>
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProudctId} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
