import {createContext,useEffect,useReducer} from "react";
import axios from "axios";
import { Types } from "../../Types/Types";
import { AuthReducer } from "./authReducer";
export const AuthContext = createContext();
export const AuthContextProvider =({children}) =>{
    const API_URL = "http://localhost:8080/api/auth/";
    const InitialAuth = {
      token: localStorage.getItem('token'),
      isLogin: false,
      user:null
    }
    const [auth, dispatch] = useReducer(AuthReducer,InitialAuth);
    const login = async(inputs) => {
       try {
         const {data} = await  axios.post(API_URL+"signin",inputs);
         localStorage.setItem("token",JSON.stringify(data))
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
         const token = JSON.parse(localStorage.getItem('token'));
         const access = token.accessToken;
         const instance = axios.create({
            baseURL: API_URL,
            headers: {'Authorization': 'Bearer '+ access}
          })
         const {data} = await instance.post("signout")
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
         let token = JSON.parse(localStorage.getItem('token'));
         const refresh = token.refreshToken;

         const {data} = await axios.post(API_URL + "refreshtoken",{
            "refreshToken":`${refresh}`
         })
         token.accessToken = data.accessToken;
         localStorage.setItem('token', JSON.stringify(token));
         dispatch({
            type: Types.login,
            payload: data.user
          })
      } catch (error) {
         localStorage.clear()
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
