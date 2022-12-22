import { Types } from "../../Types/Types";
export const AuthReducer = (state,action)=>{
    switch(action.type){
        case Types.login:
            return{
                ...state,
                isLogin:true,
                user:action.payload,
            }
        case Types.logout:
            return{
                ...state,
                isLogin:false,
                token:null,
            }
        default:
            return state;
    }
}