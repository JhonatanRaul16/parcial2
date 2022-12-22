import {createContext,useEffect,useReducer} from "react";
import axios from "axios";
import { Types } from "../../Types/Types";
import { AuthReducer } from "./authReducer";
export const AuthContext = createContext();
export const AuthContextProvider =({children}) =>{

    const InitialAuth = {
      token: localStorage.getItem('token'),
      isLogin: false,
      user:null
    }
    const [auth, dispatch] = useReducer(AuthReducer,InitialAuth);
    const login = async(inputs) => {
       try {
         const {data} = await  axios.post("http://127.0.0.1:8000/api/auth/login",inputs);
         localStorage.setItem("token", data.token);
         dispatch({
            type: Types.login,
            payload: data.user
         })
       } catch (error) {
         console.log(error);
       }
    }

    const logout = async() => {
        try {
         const token = localStorage.getItem('token');
         const instance = axios.create({
            baseURL:'http://127.0.0.1:8000',
            headers: {'Authorization': 'Bearer '+ token}
          })
         const {data} = await instance.post("/api/logout")
         localStorage.clear()
         dispatch({
            type: Types.logout,
         })
        } catch (error) {
         console.log(error);
        }
     }

     const refresh = async()=> {
      try {
         const token = localStorage.getItem('token');
         const instance = axios.create({
            baseURL:'http://127.0.0.1:8000',
            headers: {'Authorization': 'Bearer '+ token}
          })
          const {data} = await instance.get("/api/refresh_user")
          dispatch({
            type: Types.login,
            payload: data.user
          })
      } catch (error) {
         dispatch({
            type: Types.logout,
         })
         console.log(error)
      }
     }
     useEffect(()=>{
         refresh();
     },[])
     return (
        <AuthContext.Provider 
        value={{
         isLogin:auth.isLogin,
         user:auth.user,
         login,
         logout}} >
            {children}
         </AuthContext.Provider>
     );
};
