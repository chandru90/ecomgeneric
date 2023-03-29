import { useState } from "react"
import React from "react"

const AuthContext=React.createContext({
    token: '',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

})

export const AuthContextProvider=(props)=>{
    const inittoken =localStorage.getItem('token')
    const[token,setToken]=useState(inittoken)
    const userIsLoggedin=!!token
    const loginhandler=(token)=>{
        setToken(token)
        localStorage.setItem('token' ,token)
    }
    const logouthandler=()=>{
    setToken(null)
    localStorage.removeItem(token)
}
const contextvalue={
    token :token,
    isLoggedIn:userIsLoggedin,
    login:loginhandler,
    logout:logouthandler
}
    return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>
}
export default AuthContext