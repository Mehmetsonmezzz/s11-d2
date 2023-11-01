import {useState,createContext} from "react"
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
export const  AuthContext =createContext();


export default function AuthProvider ({children, ...rest}) {



    const [loggindUser, setLoggindUser] = useLocalStorage({},'friends Project');
    const [loginError,setLoginError]=useState(null);
    const baseUrl='http://localhost:9000/api/';
   
   
    const axiosWithAuthInstance=axios.create({
    
      baseURL:baseUrl,
      timeout:1000,
      headers:{
          'authorization':loggindUser.token
      }
    
  });


    const loginUserAPI=(data)=>{
      axios.post('http://localhost:9000/api/login', data)
        .then(function (response) {
          console.log(response);
          setLoggindUser(response.data)
        })
        .catch(function (error) {
          console.log(error);
          setLoginError(error.response.data.error)
        });

  }
  const isLoggedIn =()=>{
   return loggindUser.hasOwnProperty('token');
  }

  const logout =() => {
    console.log('logout');
    setLoggindUser({});
  }
  return (
    <AuthContext.Provider value={{auth: loggindUser,loginUserAPI,isLoggedIn,logout,loginError,axiosWithAuthInstance}}>
      {children}
    </AuthContext.Provider>
  )
};

