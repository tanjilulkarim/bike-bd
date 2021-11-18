import React from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./makeAdmin.css";
const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email }) => {
    const user = { email }

    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire("Admin Added!", "Admin has been added!", "success");
        }
      })

  }





  return (
    <div className="from-section-2 makeAdmin text-center">
      <h3 className="fw-bold text-center py-5">Make a Admin</h3>
      <form className="makeAdminForm" onSubmit={handleSubmit(onSubmit)}>
        {errors.star && <span>Please type Number between 0-5</span>}
        <input
          autoFocus
          type="email"
          placeholder="Enter a Email"
          {...register("email", { required: true })}
        />


        <div>
          <button type="submit" className="btn makeAdminBtn my-btn my-3 mb-1">Make Admin</button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;