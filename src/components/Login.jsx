import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Login (props) {
  const {loginUserAPI} =useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm(
      {defaultValues:{username:"workintech",password:"wecandoit"}}
    );
   



    const onSubmitHandler = data => {


        console.log(data);
        loginUserAPI(data)
    }
    console.log(errors);
    return (
        <div className="Login">
           <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label htmlFor="username">Username: </label>
      <input type="text" placeholder="username" {...register("username", {required: true})} />
      {errors.username && <div className="error">Username is required</div>}
      <label htmlFor="password">Password: </label>
      <input type="password" placeholder="password" {...register("password", {required: true})} />
      {errors.password && <div className="error">Password is required</div>}
      <input type="submit" />
    </form>
        </div>
    )

}

export default Login;