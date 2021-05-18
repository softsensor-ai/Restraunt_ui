import React, { useState } from 'react'
import axios from 'axios'

const Signin = () => {
    const [email,setEmail] = useState('')
    const [pass,setPassword] = useState('')
    
    const login = async () => {
        await axios.post('/restaurant_login',{"email":email,"password":pass})
        .then(res => { 
            const {name,token,email} = res.data;
            localStorage.setItem("token",token);
            localStorage.setItem("name",name);
            localStorage.setItem("email",email)
        })
        .catch(err=>console.error(err))
    }
    const logout = () =>{
        localStorage.clear();
    }
    return (
        <>  {localStorage.getItem("token")===null?
            <>
            <label>Email </label><input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter registered mail id"></input><br/>
            <label>Password </label><input type="password" value={pass} onChange={e=>setPassword(e.target.value)} placeholder="Enter registerd password"></input><br/>
            <button type="submit" onClick={login}>Log In</button> <br/> 
            </> :
            <>Welcome! {localStorage.getItem("name")} <button type="submit" onClick={logout}>Log out</button> </> }
        </>
    )
}

export default Signin
