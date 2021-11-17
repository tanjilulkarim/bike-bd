import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch("https://tranquil-cove-79684.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isDelete]);
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://tranquil-cove-79684.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Product has been deleted.", "success");
                    setIsDelete(true);
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Something went wrong!",
                    });
                    setIsDelete(false);
                  }
                });
            }
          });
    }

    return (
        <div className="my-section pt-5">
      <div className="container">
        
        <h2 className=" title text-center pb-5">
          Manage All Products
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
                    <img src={product.img} className="" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.dec}</p>
                    <p>$ {product.price}</p>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn my-btn"
                    >
                      Delete Product
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

export default ManageProduct;