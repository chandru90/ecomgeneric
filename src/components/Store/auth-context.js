import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import CartContext from "./cart-context"
import { useContext } from "react"

const AuthContext=React.createContext({
    token: '',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

})

export const AuthContextProvider=(props)=>{
    const crtctx=useContext(CartContext)
    
    const inittoken =localStorage.getItem('token')    
    const localemail=localStorage.getItem('emailid')
    crtctx.setEmail(localemail)
    console.log("localemail"+localemail)
    const [token,setToken,]=useState(inittoken)
    const userIsLoggedin=!!token
    const loginhandler=(token,emailid)=>{
        console.log("Email:"+emailid)
        setToken(token)
       
        //setEmailId(emailId)
        localStorage.setItem('token' ,token)
        localStorage.setItem('emailid',emailid)
    }
    const logouthandler=()=>{
    setToken(null)
    localStorage.removeItem(token)
   
   
}
const contextvalue={
    token :token,
    isLoggedIn:userIsLoggedin,
    login:loginhandler,
    logout:logouthandler ,
    
}
    return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>
}
export default AuthContext