import React from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";


function Login (props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const logMeIn=(data)=>{
        axios.post('http://localhost:9000/api/login', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    }



    const onSubmitHandler = data => {


        console.log(data);
        logMeIn(data)
    }
    console.log(errors);
    return (
        <div className="Login">
           <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label>Username: </label>
      <input type="text" placeholder="username" {...register("username", {required: true})} />
      {errors.username && <div className="error">Username is required</div>}
      <label>Password: </label>
      <input type="password" placeholder="password" {...register("password", {required: true})} />
      {errors.password && <div className="error">Password is required</div>}
      <input type="submit" />
    </form>
        </div>
    )

}

export default Login;