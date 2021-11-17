import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Shop.css";

const Shop = () => {
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
        <p className="my-color">Amazing Offers</p>
        <h2 className=" title">
          Special Deals And Last Minute <br />
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
            {products.map((product) => (
              <div className="col-lg-4 text-center">
                <div className="card my-card border-0">
                  <div className="text-center">
                  <img src={product.img} className="card-img" alt="..." />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="my-title">{product.name}</h5>
                    <p className="my-text my-2">{product.dec}</p>
                    <h3 className="fw-light">$ {product.price}</h3>
                    <button
                      onClick={() => buyNow(product._id)}
                      className="btn  my-btn"
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

export default Shop;
