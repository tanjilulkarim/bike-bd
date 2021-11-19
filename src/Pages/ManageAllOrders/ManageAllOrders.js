import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://blooming-sierra-92495.herokuapp.com/allOrders")
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
        fetch(`https://blooming-sierra-92495.herokuapp.com/deleteOrders/${id}`, {
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
    fetch(`https://blooming-sierra-92495.herokuapp.com/update/${id}`, {
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
    <div className="my-section ">
      <div className="container">


        <h3 className="text-center  text-dark  py-3">Manage All Orders</h3>
        <div className="row ">
          {orders.map((order) => (


            <div className="col-md-4  my-3 text-left">
              <div className="card">
                <div className="card-body">
                  <img
                    src={order.item.img}
                    className=" rounded-start mx-auto"
                    alt="..."
                    width="170px"
                    style={{ marginTop: "45px" }}
                  />
                  <div className="py-2">
                    <h6 className="text-dark card-title mt-2  mb-0">
                      User Name : {order.name}
                    </h6>
                    <p className="text-dark my-2 ">User email : {order.email}</p>
                    <h6 className=" text-dark my-2 ">Bike Name : {order.item.name}</h6>

                    <p className="text-dark my-2">Quantity : {order.quantity} </p>
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
                    <div className="text-left">
                      <button
                        onClick={() => approveOrders(order._id)}
                        className="btn btn-success mt-2 me-3"
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
      </div>
    </div>
  );
};

export default ManageAllOrders;
