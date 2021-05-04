import React, { useState } from 'react'
import userpic from "../assets/img/costic/customer3.jpg"
import {Link} from 'react-router-dom'

const Lockscreen = () => {
    const [secretkey,setSecretkey]=useState('')

    return (
    <div className="ms-body ms-primary-theme">

    <div className="ms-lock-screen-weather">
    <p>38°</p>
    <p>San Francisco, CA</p>
    </div>

<ul className="ms-lock-screen-nav">
<li className="ms-nav-item dropdown">
    <a href="#" className="text-disabled ms-has-notification" id="mailDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons">email</i></a>
    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="mailDropdown">
    <li className="dropdown-menu-header">
        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
    </li>
    <li className="dropdown-divider"></li>
    <li className="ms-scrollable ms-dropdown-list ps">
        <a className="media p-2" href="#">
        <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
            <img src="../../assets/img/people/people-3.jpg" className="ms-img-round" alt="people"/>
        </div>
        <div className="media-body">
            <span>Hey man, looking forward to your new project.</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
        </div>
        </a>
        <a className="media p-2" href="#">
        <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
            <img src="../../assets/img/people/people-5.jpg" className="ms-img-round" alt="people"/>
        </div>
        <div className="media-body">
            <span>Dear John, I was told you bought costic! Send me your feedback</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
        </div>
        </a>
        <a className="media p-2" href="#">
        <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
            <img src="../../assets/img/people/people-3.jpg" className="ms-img-round" alt="people"/>
        </div>
        <div className="media-body">
            <span>How many people are we inviting to the dashboard?</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
        </div>
        </a>
    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabindex="0" style={{left: 0, width: 0}}></div></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 0}}></div></div></li><li className="dropdown-divider"></li>
    <li className="dropdown-menu-footer text-center">
        <a href="../apps/email.html">Go to Inbox</a>
    </li>
    </ul>
</li>
<li className="ms-nav-item dropdown">
    <a href="#" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons">notifications</i></a>
    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
    <li className="dropdown-menu-header">
        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
    </li>
    <li className="dropdown-divider"></li>
    <li className="ms-scrollable ms-dropdown-list ps">
        <a className="media p-2" href="#">
        <div className="media-body">
            <span>12 ways to improve your crypto dashboard</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
        </div>
        </a>
        <a className="media p-2" href="#">
        <div className="media-body">
            <span>You have newly registered users</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
        </div>
        </a>
        <a className="media p-2" href="#">
        <div className="media-body">
            <span>Your account was logged in from an unauthorized IP</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
        </div>
        </a>
        <a className="media p-2" href="#">
        <div className="media-body">
            <span>An application form has been submitted</span>
            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
        </div>
        </a>
    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0, width: 0}}></div></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 0}}></div></div></li><li className="dropdown-divider"></li>
    <li className="dropdown-menu-footer text-center">
        <a href="#">View all Notifications</a>
    </li>
    </ul>
</li>
</ul>


<main className="body-content ms-lock-screen">


<div className="ms-content-wrapper">
    <img className="ms-user-img ms-img-round ms-lock-screen-user" src={userpic} alt="people"/>
    <h1>John Doe</h1>
    <form method="post">
    <div className="ms-form-group my-0 mb-0 has-icon fs-14">
        <input type="password" className="ms-form-input" name="pin" placeholder="Enter Pin" value={secretkey} onChange={(e)=>setSecretkey(e.target.value)}/>
        <i className="material-icons">security</i>
    </div>
    <Link to="/admin" className="btn bg-black w-100">Unlock</Link>
    </form>

</div>

</main>

<div className="ms-lock-screen-time">
<p>04:25</p>
<p>Friday, January 9</p>
</div>
</div>
    )
}

export default Lockscreen
