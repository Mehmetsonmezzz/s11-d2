import {useState,createContext} from "react"
import axios from "axios";

export const  AuthContext =createContext();


export default function AuthProvider ({children, ...rest}) {



    const [loggindUser, setLoggindUser] = useState({});
    const [loginError,setLoginError]=useState(null);

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
    <AuthContext.Provider value={{auth: loggindUser,loginUserAPI,isLoggedIn,logout,loginError}}>
      {children}
    </AuthContext.Provider>
  )
};

