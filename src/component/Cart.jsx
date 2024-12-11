import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id ? { ...item, cantidad: item?.cantidad + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id && item.cantidad > 1
          ? { ...item, cantidad: item?.cantidad - 1 }
          : item
      )
    );
  };
  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct?.filter((item) => item?.id !== id);
    setCartAllProduct(filteredItem);
  };

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.map((product) => {
          return (
            <div
              className="col-8 border rounded d-flex gap-3"
              key={product?.id}
            >
              <div className="p-1">
                <img
                  src={product?.img}
                  alt={product?.modelo}
                  className="cart-product-size"
                />
              </div>
              <div className="p-1 d-flex gap-3">
                <div>
                  <h3 className="text-hiding m-0">
                    {product?.modelo?.toUpperCase()}
                  </h3>
                  <p className="m-0 fs-5">
                    <span className="font-bold ">S/. </span> {product?.precio}
                  </p>
                  <p className="m-0 font-size-12 font-bold">{product?.espacio}</p>
                  <p className="m-0 font-size-12 font-bold">
                    {product?.camara}
                  </p>
                  <div className="d-flex gap-3 mt-1">
                    <p
                      className="m-0 border p-0 px-2 py-1 rounded pointer"
                      onClick={() => handleDecrement(product?.id)}
                    >
                      -
                    </p>
                    <p className="m-0 ">{product?.cantidad}</p>
                    <p
                      className="m-0  border p-0 px-2 py-1 rounded pointer"
                      onClick={() => handleIncrement(product?.id)}
                    >
                      +
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <p>{product?.descripcion}</p>
                  <p onClick={() => handleDeleteItem(product?.id)}>
                    <i className="fa-solid fa-trash text-danger pointer"></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {cartAllProduct.length == 0 && (
          <div className="col-12">
            <h1 className="text-center fs-3">No hay productos disponibles en el carrito</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
