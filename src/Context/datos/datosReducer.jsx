import { Types } from "../../Types/Types";
export const DatosReducer = (state,action)=>{
    switch(action.type){
        case Types.listaDocentes:
            return{
                ...state,
                docentes:action.payload,
            }
        case Types.edit:
            return{
                ...state,
                edit:action.payload
            }
        default:
            return state;
    }
}