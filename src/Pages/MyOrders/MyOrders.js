import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { email } = user;
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`https://tranquil-cove-79684.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete, email]);

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
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
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
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <div className="my-section">
      <h3 className="text-center ">My Orders</h3>

      {!orders.length ? (
        <div className="text-center">
          <h4 className="title ">
            {" "}
            Book Some Toys
            <br /> Or <br />
            Please Wait...
          </h4>
          <button onClick={handleClick} className="btn my-btn">
            Book Tour
          </button>
        </div>
      ) : (
        <>
          {orders.map((order) => (
            <div className="col-lg-8 col-sm-12 mx-auto">
              <div className="service-card my-bg card shadow mb-3">
                <div className="row g-0">
                  <div className="col-md-3 col-sm-12 text-center">
                    <img
                      src={order.item.img}
                      className=" rounded-start"
                      alt="..."
                      width="180px"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                     
                      <h5 className="fw-bold my-color my-2">
                        <i class="fas fa-map-marker-alt"></i> {order.item.name}
                      </h5>
                      <p className="card-text m-0 text-muted  my-2">
                        {order.item.dec}
                      </p>
                      <h5 className="card-text m-0  my-2 ">
                        <i class="fas fa-clipboard-list my-color me-2"></i>
                        Quantity : {order.quantity}
                      </h5>
                      <h2 className="fw-light  my-2">
                        ${order.item.price}
                      </h2>
                      <p
                        className={
                          order.status === "pending"
                            ? "text-danger m-0"
                            : "text-success m-0"
                        }
                      >
                        <i className="far fa-clipboard"></i>
                        <strong> {order.status}</strong>{" "}
                      </p>
                      <button
                        onClick={() => deleteOrders(order._id)}
                        className="btn my-btn mt-4"
                      >
                        Cancel Orders
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MyOrders;
