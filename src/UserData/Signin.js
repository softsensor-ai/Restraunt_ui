import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [flag,setflag]=useState(false)
    const login = async (e) => {
        e.preventDefault()
        await axios.post('/restaurant_login',{"email":email,"password":password})
        .then(res => { 
            const {name,token,email,admin_status} = res.data;
            name&&setflag(true)
            localStorage.setItem("token",token);
            localStorage.setItem("name",name);
            localStorage.setItem("email",email)
            localStorage.setItem("admin_status",admin_status)
        })
        .catch(err=>console.error(err))
    }
    const logout = () =>{
        localStorage.clear();
    }
    return (
    <div class="ms-content-wrapper ms-auth">
    <div class="ms-auth-container">
        <div class="ms-auth-col">
        <div class="ms-auth-bg"></div>
        </div>
        <div class="ms-auth-col">
        <div class="ms-auth-form">
            <form class="needs-validation" novalidate="">
            <h3>Login to Account</h3>
            <p>Please enter your email and password to continue</p>
            <div class="mb-3">
                <label for="validationCustom08">Email Address</label>
                <div class="input-group">
                <input type="email" class="form-control" id="validationCustom08" placeholder="Enter email address" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div class="invalid-feedback">Please provide a valid email.</div>
                </div>
            </div>
            <div class="mb-2">
                <label for="validationCustom09">Password</label>
                <div class="input-group">
                <input type="password" class="form-control" id="validationCustom09" placeholder="Enter password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div class="invalid-feedback">Please provide a password.</div>
                </div>
            </div>
            <div class="form-group">
                <label class="ms-checkbox-wrap">
                <input class="form-check-input" type="checkbox" /> <i class="ms-checkbox-check"></i>
                </label> <span> Remember Password </span>
                <label class="d-block mt-3"><a href="#" class="btn-link" data-toggle="modal" data-target="#modal-12">Forgot Password?</a>
                </label>
            </div>
            <button class="btn btn-primary mt-4 d-block w-100" type="submit" onClick={login}>Sign In</button> 
            <p class="mb-0 mt-3 text-center">Don't have an account? <Link class="btn-link" to="/signup">Create Account</Link> 
            </p>
            </form>
        </div>
        </div>
        {flag&&<Redirect to="/admin"/>}
    </div>
    </div>
    )
}

export default Signin
