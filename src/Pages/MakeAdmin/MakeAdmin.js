import React from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      
      const onSubmit = ({email}) =>{ 
        const user = {email}
       
        fetch('https://tranquil-cove-79684.herokuapp.com/users/admin', {
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
        <div className="from-section-2 text-center">
         <h3 className="fw-bold text-center py-5">Make a Admin</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      {errors.star && <span>Please type Number between 0-5</span>}
        <input
          autoFocus
          type="email"
          placeholder="Enter a Email"
          {...register("email", { required: true })}
        />
        

        <button type="submit" className="btn my-btn mb-1">Make Admin</button>
      </form>
    </div>
    );
};

export default MakeAdmin;