import { IS_LOGGING } from "../constant"

const initState={isLogging:false}
export default function loggingreducer(preState=initState,action){
    const {type,data}=action
    switch(type){
        case IS_LOGGING:
            return data

        default:
            return preState 
    }
}