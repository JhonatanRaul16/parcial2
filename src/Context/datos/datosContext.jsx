import {createContext,useEffect,useReducer} from "react";
import axios from "axios";
import { Types } from "../../Types/Types";
import { DatosReducer } from "./datosReducer";
export const DatosContext = createContext();
export const DatosContextProvider =({children}) =>{


    const InitialState = {
        docentes:[],
        edit:null
    }
    const [datos,dispatch] = useReducer(DatosReducer, InitialState)
    const listarDocentes= async()=>{
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            const access = token.accessToken;
            const instance = axios.create({
                baseURL:'http://localhost:8080/api',
                headers: {'Authorization': 'Bearer '+ access}
              })
            const {data} = await instance.get('/docentes');
            
            dispatch({
                type:Types.listaDocentes,
                payload:data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const eliminarCursos =async(id)=>{
        try {
            const token = localStorage.getItem("token");
            const instance = axios.create({
                baseURL:'http://127.0.0.1:8000',
                headers: {'Authorization': 'Bearer '+ token}
              })
            const {data}=await instance.delete(`/api/cursos/${id}`);
            listarCursos();
        } catch (error) {
            console.log(error)
        }
    }
    const crearCurso = async(inputs)=>{
        try {
            const token = localStorage.getItem("token");
            const instance = axios.create({
                baseURL:'http://127.0.0.1:8000',
                headers: {'Authorization': 'Bearer '+ token}
              })
            const {data}=await instance.post('/api/cursos',inputs);
            listarCursos();
        } catch (error) {
            console.log(error);
        }
    }
    const editCursos=async(id)=>{
        try {
            const token = localStorage.getItem("token");
            const instance = axios.create({
                baseURL:'http://127.0.0.1:8000',
                headers: {'Authorization': 'Bearer '+ token}
              })
            const {data}=await instance.get(`/api/cursos/${id}`);
            dispatch({
                type: Types.edit,
                payload:data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const actualizarCursos= async(id) =>{
        try {
            const token = localStorage.getItem("token");
            const instance = axios.create({
                baseURL:'http://127.0.0.1:8000',
                headers: {'Authorization': 'Bearer '+ token}
              })
            const {data}=await instance.update(`/api/cursos/${id}`)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        listarDocentes()
    },[]);
     return (
        <DatosContext.Provider 
        value={{
            docentes:datos.docentes,
            edit:datos.edit,
            listarDocentes,
            eliminarCursos,
            actualizarCursos,
            editCursos,
            crearCurso
        }} >
            {children}
         </DatosContext.Provider>
     );
};
