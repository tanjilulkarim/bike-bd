import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://tranquil-cove-79684.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete, isUpdate]);
  const deleteOrders = (id) => {
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
        fetch(`https://tranquil-cove-79684.herokuapp.com/deleteOrders/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
  };
  const approveOrders = (id) => {
    fetch(`https://tranquil-cove-79684.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Order Approved!", "You approved this order!", "success");
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
        
      });
  };
  
  return (
    <div className="my-section">
      <h3 className="text-center  py-3">Manage All Orders</h3>
      {orders.map((order) => (
        <div className="col-lg-6 mx-auto">
          <div className="service-card-2 card my-bg mb-3 ">
            <div className="row g-0">
              <div className="col-md-4 text-center">
                <img
                  src={order.item.img}
                  className=" rounded-start"
                  alt="..."
                  width="150px"
                />
              </div>
              <div className="col-md-6">
                <div className="py-2">
                  <h6 className="card-title mt-2  mb-0">
                    User Name : {order.name}
                  </h6>
                  <p className=" my-2 ">User email : {order.email}</p>
                  <h6 className=" my-2 ">Toy Name : {order.item.name}</h6>
                  
                  <p className=" my-2">Quantity : {order.quantity} </p>
                  <p
                    className={
                      order.status === "pending"
                        ? "text-danger  my-2"
                        : "text-success  my-2"
                    }
                  >
                    <i className="far fa-clipboard"></i>
                    <strong> {order.status}</strong>{" "}
                  </p>
                  <button
                    onClick={() => approveOrders(order._id)}
                    className="btn btn-success mt-2 me-5"
                  >
                    Approve Order
                  </button>
                  <button
                    onClick={() => deleteOrders(order._id)}
                    className="btn btn-danger mt-2 "
                  >
                    Delete Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageAllOrders;
