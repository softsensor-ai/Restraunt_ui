import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [restraunt_name,setRestraunt_name] = useState('')
    const [address,setAddress] = useState('')
    const [password,setPassword]= useState('')
    const [confirmpassword,setConfirmpassword]=useState('')

    return (
    <main className="body-content">
    
    <div className="ms-content-wrapper ms-auth">

    <div className="ms-auth-container">
    <div className="ms-auth-col">
        <div className="ms-auth-bg"></div>
    </div>
    <div className="ms-auth-col">
        <div className="ms-auth-form">
        <form className="needs-validation" novalidate="">
            <h3>Create Account</h3>
            <p>Please enter personal information to continue</p>
            <div className="form-row">
            <div className="col-md-6 ">
                <label for="validationCustom01">First name</label>
                <div className="input-group">
                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required value={firstname}/>
                <div className="valid-feedback">
                    Looks good!
                </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <label for="validationCustom02">Last name</label>
                <div className="input-group">
                <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required value={lastname}/>
                <div className="valid-feedback">
                    Looks good!
                </div>
                </div>
            </div>
            </div>
            <div className="form-row">
            <div className="col-md-12 ">
                <label for="validationCustom03">Email Address</label>
                <div className="input-group">
                <input type="email" className="form-control" id="validationCustom03" placeholder="Email Address" required value={email}/>
                <div className="invalid-feedback">
                    Please provide a valid email.
                </div>
                </div>
            </div>
            </div>
            <div className="form-row">
            <div className="col-md-12 ">
                <label for="validationCustom05">Restaurant Name</label>
                <div className="input-group">
                <input type="text" className="form-control" id="validationCustom05" placeholder="Restaurant Name" required value={restraunt_name}/>
                <div className="invalid-feedback">
                    Please provide a valid Name.
                </div>
                </div>
            </div>
            </div>
            <div className="form-row">
            <div className="col-md-12 ">
                <label for="validationCustom06">Restaurant Address</label>
                <div className="input-group">
                <input type="text" className="form-control" id="validationCustom06" placeholder="Restaurant Address" required value={address}/>
                <div className="invalid-feedback">
                    Please provide a valid Address.
                </div>
                </div>
            </div>
            </div>
            <div className="form-row">
            <div className="col-md-12 ">
                <label for="validationCustom04">Password</label>
                <div className="input-group">
                <input type="password" className="form-control" id="validationCustom04" placeholder="Password" required value={password}/>
                <div className="invalid-feedback">
                    Please provide a password.
                </div>
                </div>
            </div>
            </div>
            <div className="form-row">
            <div className="col-md-12 ">
                <label for="validationCustom04">Confirm password</label>
                <div className="input-group">
                <input type="password" className="form-control" id="validationCustom04" placeholder="Confirm Password" required value={confirmpassword}/>
                <div className="invalid-feedback">
                    Please provide same password.
                </div>
                </div>
            </div>
            </div>
            <div className="form-group">
            <div className="form-check pl-0">
                <label className="ms-checkbox-wrap">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required=""/>
                <i className="ms-checkbox-check"></i>
                </label>
                <span> Agree to terms and conditions </span>
            </div>
            </div>
            <button className="btn btn-primary mt-4 d-block w-100" type="submit">Create Account</button>
            
            <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/login">Login</Link> </p>
        </form>

        </div>
    </div>
    </div>

</div>

</main>
    )
}

export default Signup
