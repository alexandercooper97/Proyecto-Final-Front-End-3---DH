import React from "react";
import productList from "./data";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
    toast.success("Producto Agregado Satisfactoriamente !");
  };

  return (
    <div className="container-fluid px-5">
      <div className="row gap-4 justify-content-center">
        <Toaster />
        {productList?.map((product, index) => {
          return (
            <div className="col-2 border rounded mt-2" key={product?.id}>
              <div className="d-flex justify-content-center p-2">
                <img src={product?.img} alt="" className="product-size" />
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between px-2">
                  <p className="m-0 font-bold font-size-12">{product?.marca}</p>
                  <p className="m-0 font-bold font-size-12">{product?.modelo}</p>
                </div>
                <div className=" px-2">
                  <p className="m-0">
                    <span className="font-bold">S/. </span> {product?.precio}
                  </p>
                  <p className="m-0 text-hiding">{product?.espacio}</p>
                </div>
                <div className="px-2 mt-1">
                  <button
                    className="btn btn-primary p-1 w-100"
                    onClick={() => handleAddToCart(product?.id)}
                  >
                    Agregar Carrito
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
