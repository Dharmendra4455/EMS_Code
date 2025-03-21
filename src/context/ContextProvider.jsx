import { createContext, useEffect, useState } from "react";
import { GetlocalStorage } from "../utils/localStorage";
export const AuthContext=createContext()

function ContextProvider({children}){
    const[userdata,setuserdata]=useState("")
    useEffect(()=>{
        const {employee,admin}=GetlocalStorage()

      setuserdata({employee,admin})
    },[])
   
    return(<>
    <AuthContext.Provider value={userdata}>
        {children}
    </AuthContext.Provider>
    </>)
}
export default ContextProvider;