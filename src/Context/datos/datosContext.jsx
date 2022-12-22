import {createContext,useEffect,useReducer} from "react";
import axios from "axios";
import { Types } from "../../Types/Types";
import { DatosReducer } from "./datosReducer";
export const DatosContext = createContext();
export const DatosContextProvider =({children}) =>{


    const InitialState = {
        cursos:[],
        edit:null
    }
    const [datos,dispatch] = useReducer(DatosReducer, InitialState)
    const listarCursos = async()=>{
        try {
            const token=localStorage.getItem('token');
            const instance = axios.create({
                baseURL:'http://127.0.0.1:8000',
                headers: {'Authorization': 'Bearer '+ token}
              })
            const {data}=await instance.get('/api/cursos');
            dispatch({
                type:Types.listaCursos,
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
        listarCursos()
    },[]);
     return (
        <DatosContext.Provider 
        value={{
            cursos:datos.cursos,
            edit:datos.edit,
            listarCursos,
            eliminarCursos,
            actualizarCursos,
            editCursos,
            crearCurso
        }} >
            {children}
         </DatosContext.Provider>
     );
};
