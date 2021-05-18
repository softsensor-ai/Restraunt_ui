import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'

const RegistrationForm = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [restraunt_name,setRestraunt_name] = useState('')
    const [address,setAddress] = useState('')
    const [password,setPassword]= useState('')
    const [confirmpassword,setConfirmpassword]=useState('')

    useEffect(()=>{
        const pass1 = document.getElementById('password1');
        const pass2 = document.getElementById('password2');
    })
    const checkme = (e) =>{
        if(e.target.id === 'togglePassword1'){
            showmepass('password1')
        }
        else{
            showmepass('password2')
        }
    }
    const showmepass = (value) =>{
        const pos = document.getElementById(value);
            if(pos.type === 'password'){
                pos.type="text";
            }
            else{
                pos.type="password";
            }
    }

    const submitForm =  async (e) =>{
        const data = 
        {
            'firstName':firstname,
            'lastName':lastname,
            'restaurantName':restraunt_name,
            'restaurantAddress':address,
            'emailAddress':email,
            'password':password
            
        }
        e.preventDefault()
        if(password===confirmpassword){
            await axios.post('/restaurant_signup', data, {
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(()=> {alert("Account created successfully! "); })
            .catch(err => {console.error(err); alert("Email already exist.")})
            resetForm()
        }
        else{
            alert('Password should be same.')
        }
        
    }
    const resetForm = (e)=>{
        setFirstname('')
        setLastname('')
        setEmail('')
        setRestraunt_name('')
        setAddress('')
        setPassword('')
    }
    return (
        <div >
            <form className="Center">
            <div className="home">
            <h1>Welcome User</h1>
            <label>First Name</label><input type="text" autoFocus value={firstname} onChange={e=>setFirstname(e.target.value)}  placeholder="Enter first name" pattern="[A-Za-z]{4,10}" title="Shouldn't contain numbers and should be of minimum 4 letters" required/><br/>
            <label>Last Name</label><input type="text" value={lastname} onChange={e=>setLastname(e.target.value)} placeholder="Enter last name" pattern="[A-Za-z]{4,10}" title="It should be alphabet only with minimum 3 letters" required/><br/>
            <label>Password</label><input type="password" id="password1" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="Enter password"></input><span>Show<input type="checkbox" onChange={checkme} id="togglePassword1"/></span> <br/>
            <label>Confirm password</label><input type="password" id="password2" value={confirmpassword} onChange={e=>setConfirmpassword(e.target.value)} required placeholder="Enter password again"></input><span>Show<input type="checkbox" onChange={checkme} id="togglePassword2"/> </span><br/>
            <label>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email address" required/><br/>
            <label>Restraunt Name</label><input type="text" value={restraunt_name} onChange={e=>setRestraunt_name(e.target.value)} pattern="[A-Za-z]*" placeholder="Enter restraunt name" required/><br/>
            <label>Address</label><input type="text" value={address} placeholder="Enter address" onChange={e=>setAddress(e.target.value)} required/>
            <div style={{alignSelf:'center',margin:'20px'}}>
            <button type="submit" onClick={submitForm}>Submit</button>
            <button onClick={resetForm} >Reset</button>
            </div>
            </div>
            </form>
        </div>
    )
}

export default RegistrationForm
