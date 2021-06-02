import React, { useState } from 'react'
import userpic from '../assets/img/costic/customer-6.jpg'
import '../assets/vendors/iconic-fonts/flat-icons/flaticon.css'
import mail2 from '../assets/img/costic/customer-2.jpg'
import mail3 from '../assets/img/costic/customer-1.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [flag, setflag] = useState(true)
        // for opening side nav
    const addcss = () => {
        if (flag) {
            document.getElementById('main').classList.remove('ms-aside-left-open');
            document.getElementById('ms-side-nav').classList.add('ms-aside-open');
            document.getElementById('special').classList.add('d-block')
        } else {
            document.getElementById('main').classList.add('ms-aside-left-open');
            document.getElementById('ms-side-nav').classList.remove('ms-aside-open');
            document.getElementById('special').classList.remove('d-block')
        }
        setflag(!flag);
    }
    const logout = () =>{
        localStorage.clear()
    }
    const [initialnav, setinitialnav] = useState(true)

    // showing nav toggle profile and mail options
    const shownavtoggle = () => {
        initialnav ? document.getElementById('ms-nav-options').classList.add('ms-slide-down') :
            document.getElementById('ms-nav-options').classList.remove('ms-slide-down');
        setinitialnav(!initialnav);
    }

    return (
    <nav className="navbar ms-navbar">
    <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft" onClick={addcss}> <span className="ms-toggler-bar bg-primary"></span>
        <span className="ms-toggler-bar bg-primary"></span>
        <span className="ms-toggler-bar bg-primary"></span>
    </div>
    <div className="logo-sn logo-sm ms-d-block-sm">
        <a className="pl-0 ml-0 text-center navbar-brand mr-0" href="index-2.html"><img src="" alt="logo" /> </a>
    </div>
    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
        <li className="ms-nav-item ms-search-form pb-0 py-0">
        <form className="ms-form" method="post">
            <div className="ms-form-group my-0 mb-0 has-icon fs-14">
            <input type="search" className="ms-form-input" name="search" placeholder="Search here..."/> <i className="flaticon-search text-disabled"></i>
            </div>
        </form>
        </li>
        <li className="ms-nav-item dropdown"> <a href="#" className="text-disabled ms-has-notification" id="mailDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-mail"></i></a>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="mailDropdown">
            <li className="dropdown-menu-header">
            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-scrollable ms-dropdown-list">
            <a className="media p-2" href="#">
                <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                <img src={userpic} className="ms-img-round" alt="people" />
                </div>
                <div className="media-body"> <span>Hey man, looking forward to your new project.</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                </div>
            </a>
            <a className="media p-2" href="#">
                <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
                <img src={mail2} className="ms-img-round" alt="people" />
                </div>
                <div className="media-body"> <span>Dear John, I was told you bought costic! Send me your feedback</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
                </div>
            </a>
            <a className="media p-2" href="#">
                <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                <img src={mail2} className="ms-img-round" alt="people" />
                </div>
                <div className="media-body"> <span>How many people are we inviting to the dashboard?</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
                </div>
            </a>
            </li>
            <li className="dropdown-divider"></li>
            <li className="dropdown-menu-footer text-center"> <a href="pages/apps/email.html">Go to Inbox</a>
            </li>
        </ul>
        </li>
        <li className="ms-nav-item dropdown"> <a href="#" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-bell"></i></a>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
            <li className="dropdown-menu-header">
            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-scrollable ms-dropdown-list">
            <a className="media p-2" href="#">
                <div className="media-body"> <span>12 ways to improve your crypto dashboard</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                </div>
            </a>
            <a className="media p-2" href="#">
                <div className="media-body"> <span>You have newly registered users</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                </div>
            </a>
            <a className="media p-2" href="#">
                <div className="media-body"> <span>Your account was logged in from an unauthorized IP</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                </div>
            </a>
            <a className="media p-2" href="#">
                <div className="media-body"> <span>An application form has been submitted</span>
                <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                </div>
            </a>
            </li>
            <li className="dropdown-divider"></li>
            <li className="dropdown-menu-footer text-center"> <a href="#">View all Notifications</a>
            </li>
        </ul>
        </li>

        <li className="ms-nav-item ms-nav-user dropdown">
        <a href="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="ms-user-img ms-img-round float-right" src={mail3} alt="people" />
        </a>
        <ul className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
            <li className="dropdown-menu-header">
            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Hey! Anne</span></h6>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-dropdown-list">
            <Link className="media fs-14 p-2" to="/admin/profile"> <span><i className="flaticon-user mr-2"></i> Profile</span>
            </Link>
            <Link className="media fs-14 p-2" to="/admin/email"> <span><i className="flaticon-mail mr-2"></i> Inbox</span> <span className="badge badge-pill badge-info">3</span>
            </Link>
            <Link className="media fs-14 p-2" to="/admin/setting"> <span><i className="flaticon-gear mr-2"></i> Account Settings</span>
            </Link>
            </li>
            <li className="dropdown-divider"></li>
            <li className="dropdown-menu-footer">
            <Link className="media fs-14 p-2" to="/lockscreen"> <span><i className="flaticon-security mr-2"></i> Lock</span>
            </Link>
            </li>
            <li className="dropdown-menu-footer">
            <Link className="media fs-14 p-2" to="/" onClick={logout}> <span><i className="flaticon-shut-down mr-2"></i> Logout</span>
            </Link>
            </li>
        </ul>
        </li>
    </ul>
    <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options" onClick={shownavtoggle}> <span className="ms-toggler-bar bg-primary"></span>
        <span className="ms-toggler-bar bg-primary"></span>
        <span className="ms-toggler-bar bg-primary"></span>
        </div>
    </nav>


    );
}
export default Navbar