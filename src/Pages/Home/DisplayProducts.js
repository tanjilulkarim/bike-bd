import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-cove-79684.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const history = useHistory();
  const buyNow = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="my-section pt-5">
      <div className="container">
        <p className="my-color text-center">Amazing Offers</p>
        <h2 className=" title text-center pb-5">
          Special Deals And Last Minute 
          Amazing Offers
        </h2>
        {!products.length ? (
          <div className="text-center">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="row">
            {products.slice(0, 6)?.map((product) => (
              <div className="col-lg-4 text-center">
                <div className="card my-card border-0">
                  <div className="text-center">
                    <img src={product.img} className="" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.dec}</p>
                    <p>$ {product.price}</p>
                    <button
                      onClick={() => buyNow(product._id)}
                      className="btn my-btn"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
