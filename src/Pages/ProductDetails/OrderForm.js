import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import "./OrderForm.css"
const OrderForm = (props) => {
  const { product } = props;
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    data.item = product;
    fetch("https://tranquil-cove-79684.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(
            "Good job!",
            "You booked this product Successfully!",
            "success"
          );
          reset();
        } else {
          alert("something went wrong");
        }
      });
  };
  return (
    <div className="from-section">
      <h3 className="fw-bold text-center">Order The Toy</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.tickets && (
          <span className="fw-bold">
         Number, Date, Tickets  required
          </span>
        )}
        <input
          autoFocus
          control={control}
          defaultValue={user?.displayName}
          {...register("name", { required: true })}
        />
        <input
          defaultValue={user?.email}
          {...register("email", { required: true })}
        />
        
        <input
          placeholder="Phone"
          {...register("number", { required: true })}
        />
        <input
          type="number"
          placeholder="Quantity"
          {...register("quantity", { required: true })}
        />
        <input
          autoFocus
          defaultValue={product?.name}
          {...register("product", { required: true })}
        />

        
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default OrderForm;
