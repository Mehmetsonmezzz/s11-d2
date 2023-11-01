import "./Header.css";
import {useHistory} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
function Header() {
  const {auth,isLoggedIn,logout}=useContext(AuthContext);
  const history=useHistory() 
  return (
    <div className="mainHeaderContainer">
      <div className="logoContainer">
        <h1>FRIENDS DATABASE</h1>
        {isLoggedIn() &&<div>HI {auth.username.toUpperCase()}</div>}
      </div>
      <div className="navContainer">
        {!isLoggedIn() &&( <button onClick={()=> history.push("/login/")} className="navContainerItem">LOGIN.</button>)}
        {isLoggedIn() &&(
          <>
           <button onClick={()=> history.push("/friends/")} className="navContainerItem">FRIENDSLIST.</button>
        <button onClick={()=> history.push("/friends/add")} className="navContainerItem">ADDFRIEND.</button>
        <button onClick={logout} className="navContainerItem">LOGOUT</button>
          </>
        )}
       
      </div>
    </div>
  );
}

export default Header;
