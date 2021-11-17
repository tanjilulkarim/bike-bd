import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  const onSubmit = (data) =>{ 
    fetch("https://tranquil-cove-79684.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Review Added!", "Review has been added!", "success");
          reset();
        } else {
        }
      });
    };

  return (
    <div className="from-section text-center">
         <h3 className="fw-bold text-center">Add a Review</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      {errors.star && <span>Please type Number between 0-5</span>}
        <input
        autoFocus
          placeholder="Your Name"
          defaultValue={user.displayName}
          {...register("name", { required: true })}
        />
        <input
          placeholder="Your Image"
          {...register("img", { required: true })}
        />
         
        <input 
        placeholder="star between 0-5"
        type="number" {...register("star", { min: 0, max: 5 })} />
        <textarea
          name="Description"
          id=""
          placeholder="Description"
          cols="30"
          rows="3"
          {...register("dec", { required: true })}
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;
