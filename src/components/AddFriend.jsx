
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useForm } from 'react-hook-form';



export default function AddFriend()  {
const {axiosWithAuthInstance} = useContext(AuthContext);
const { register, handleSubmit, formState: { errors } } = useForm();
 

const onSubmitHandler = (data) => {
    axiosWithAuthInstance.post('friends',data)
    .then(res =>{
        console.log('/friends',res)
    })
    .catch(err =>{
        console.log('/friends',err)
    })
}


  return (
    <div className="Login">
    <form onSubmit={handleSubmit(onSubmitHandler)}>
     <label htmlFor="name">Name: </label>
<input type="text" placeholder="name" {...register("name", {required: true})} />
{errors.name && <div className="error">name is required</div>}

<label htmlFor="email">Email: </label>
<input type="email" placeholder="email" {...register("email", {required: true})} />
{errors.email && <div className="error">email is required</div>}

<label htmlFor="age">Age: </label>
<input type="number" placeholder="age" {...register("age", {required: true})} />
{errors.age && <div className="error">age is required</div>}

<input type="submit" />
</form>
 </div>
  )
};

