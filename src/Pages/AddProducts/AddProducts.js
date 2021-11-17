import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://tranquil-cove-79684.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Offer Added!", "Offer has been added!", "success");
          reset();
        } else {
        }
      });
  };
  return (
    
          <div className="from-section text-center">
            <h3 className="fw-bolder text-center">Add a new Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.img && (
          <span className="fw-bold">
         All Input are  required
          </span>
        )}
              <input
                placeholder="Product Name"
                {...register("name", { required: true })}
              />
              <textarea
              name="Description"
              id=""
              placeholder="Description"
              cols="30"
              rows="3"
                {...register("dec", { required: true })}
              />
              <input
                placeholder="Product price"
                type="number"
                {...register("price", { required: true })}
              />
              <input
                placeholder="Product image URl"
                {...register("img", { required: true })}
              />

              <input type="submit" />
            </form>
          </div>
       
        
  );
};

export default AddProducts;
