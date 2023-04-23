import { VotersContext } from "../context/VotersContext";
import { useContext } from "react";

export const useVotersContext = () =>{
    const context = useContext(VotersContext)
    if(!context){
        throw Error('VotersContext must be used inside an VotersContextProvider')
    }
    return context
}