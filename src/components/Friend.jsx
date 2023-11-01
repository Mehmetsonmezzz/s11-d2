import {useHistory} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { NavLink,useParams } from 'react-router-dom';
const Friend = () => {
    const [friend,setFriend]=useState([]);
const {axiosWithAuthInstance} = useContext(AuthContext);
    const {friendId}=useParams();
useEffect(()=>{
    axiosWithAuthInstance.get(`friends/` + friendId)
    .then(res =>{
        
        console.log('/friends/friendID',res)
        setFriend(res.data)
    })
    .catch(err =>{
        console.log('/friends/friendID',err)
    })


}, [])

  return (
        <div>
            <h2>FRIEND {friend.name}</h2>
                <div>
                    EMAIL : <strong>{friend.email}</strong><br/>
                   AGE : <strong>{friend.age}</strong><br/>

                </div>
        </div>
  )
};

export default Friend
