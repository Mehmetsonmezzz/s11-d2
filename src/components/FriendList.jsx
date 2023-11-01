import {useHistory} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
const FriendList = () => {
    const [friends,setFriends]=useState([]);
const {axiosWithAuthInstance} = useContext(AuthContext);

useEffect(()=>{
    axiosWithAuthInstance.get('friends')
    .then(res =>{
        
        console.log('/friends',res)
        setFriends(res.data)
    })
    .catch(err =>{
        console.log('/friends',err)
    })


}, [])

  return (
        <div>
            <h2>FRIENDS LIST</h2>
            
                <ul  className='list'>
                {friends.map((friend, key)=>(
                    <NavLink key={key} to={`/friends/${friend.id}`}>
                    <li>- {friend.name}-{friend.email}</li>

                    </NavLink>


                
            ))}
            </ul>

        </div>
  )
};

export default FriendList
