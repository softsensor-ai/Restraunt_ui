import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import Home from './Home'

const Form = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [restraunt_name,setRestraunt_name] = useState('')
    const [address,setAddress] = useState('')

    const [flag,setFlag] = useState('') 

    const submitForm =  async (e) =>{
        const data = 
        {
            'firstName':firstname,
            'lastName':lastname,
            'restaurantName':restraunt_name,
            'restaurantAddress':address,
            'emailAddress':email,
            
        }
        e.preventDefault()
        
        await axios.post('/restaurant_info', data, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(()=> {console.log("sent"); setFlag('true'); })
        .catch(err => console.error(err))
    }
    const resetForm = (e)=>{
        setFirstname('')
        setLastname('')
        setEmail('')
        setRestraunt_name('')
        setAddress('')
        setFlag('')
    }
    return (
        <>
        <form >
            <div className="home">
            <h1>Welcome User</h1>
            <label>First Name</label><input type="text" value={firstname} onChange={e=>setFirstname(e.target.value)} placeholder="Enter first name" pattern="[A-Za-z]{4,10}" title="Shouldn't contain numbers and should be of minimum 4 letters" required/><br/>
            <label>Last Name</label><input type="text" value={lastname} onChange={e=>setLastname(e.target.value)} placeholder="Enter last name" pattern="[A-Za-z]{4,10}" title="It should be alphabet only with minimum 3 letters" required/><br/>
            <label>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email address" required/><br/>
            <label>Restraunt Name</label><input type="text" value={restraunt_name} onChange={e=>setRestraunt_name(e.target.value)} pattern="[A-Za-z]*" placeholder="Enter restraunt name" required/><br/>
            <label>Address</label><input type="text" value={address} placeholder="Enter address" onChange={e=>setAddress(e.target.value)} required/>
            <div style={{alignSelf:'center',margin:'20px'}}>
            <button type="submit" onClick={submitForm}>Submit</button>
            <button onClick={resetForm} >Reset</button>
            </div>
            </div>
        </form>
        <div>
            {flag ? <Home name={restraunt_name} address={address} /> : ''}
        </div>
        </>
    )
}

export default Form
