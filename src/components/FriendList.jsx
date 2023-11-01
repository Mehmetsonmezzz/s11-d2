import {useHistory} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
const FriendList = () => {
const {axiosWithAuthInstance} = useContext(AuthContext);

useEffect(()=>{
    axiosWithAuthInstance.get('friends')
    .then(res =>{
        console.log('/friends',res)
    })
    .catch(err =>{
        console.log('/friends',err)
    })


}, [])

  return (
    <div>
      abbla
    </div>
  )
};

export default FriendList
