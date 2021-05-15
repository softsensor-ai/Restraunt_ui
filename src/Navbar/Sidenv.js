import React from 'react'
import '../assets/vendors/iconic-fonts/font-awesome/css/all.min.css'
import sideimg from '../assets/img/costic/costic-logo-216x62.png'
import Menuitem from '../Menu/Menuitem'
import { Link } from 'react-router-dom'
const Sidenv = () => {

    

    return (
    <div>
    {/* <div id="preloader-wrap">
        <div className="spinner spinner-8">
        <div className="ms-circle1 ms-child"></div>
        <div className="ms-circle2 ms-child"></div>
        <div className="ms-circle3 ms-child"></div>
        <div className="ms-circle4 ms-child"></div>
        <div className="ms-circle5 ms-child"></div>
        <div className="ms-circle6 ms-child"></div>
        <div className="ms-circle7 ms-child"></div>
        <div className="ms-circle8 ms-child"></div>
        <div className="ms-circle9 ms-child"></div>
        <div className="ms-circle10 ms-child"></div>
        <div className="ms-circle11 ms-child"></div>
        <div className="ms-circle12 ms-child"></div>
        </div>
    </div> */}

    <div className="ms-aside-overlay ms-overlay-left ms-toggler" id="special" data-target="#ms-side-nav" data-toggle="slideLeft"></div>
    <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"></div>
    
    <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left ps--active-y">
        
        <div className="logo-sn ms-d-block-lg">
        <Link className="pl-0 ml-0 text-center" to="/admin">
            <img src={sideimg} alt="logo"/>
        </Link>
        </div>
        
        <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
        
        <li className="menu-item">
            <a href="#" className="has-chevron" data-toggle="collapse" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard"> <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
            </a>
            <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
            <li> <Link to="/admin">Main Dashboard</Link>
            </li>
            </ul>
        </li>
        
        
        <li className="menu-item">
            <a href="#" className="has-chevron" data-toggle="collapse" data-target="#product" aria-expanded="false" aria-controls="product"> <span><i className="fa fa-archive fs-16"></i>Menus </span>
            </a>
            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
            <li> <Link to="/admin/menu" >Menu</Link>
            </li>
            <li> <Link to="/admin/addproduct">Add Product</Link>
            </li>
            <li> <Link to="/admin/productView/1">Product Detail</Link>
            </li>
            </ul>
        </li>
        
        
        <li className="menu-item">
            <Link to="/admin/order"> <span><i className="fas fa-clipboard-list fs-16"></i>Orders</span>
            </Link>
        </li>
        
        
        <li className="menu-item">
            <Link to="/admin/restrauntlist"> <span><i className="fa fa-tasks fs-16"></i>Restaurants List</span>
            </Link>
        </li>
        
        
        <li className="menu-item">
            <a href="#" className="has-chevron" data-toggle="collapse" data-target="#invoice" aria-expanded="false" aria-controls="invoice"> <span><i className="fas fa-file-invoice fs-16"></i>Invoice </span>
            </a>
            <ul id="invoice" className="collapse" aria-labelledby="invoice" data-parent="#side-nav-accordion">
            <li> <Link to="/admin/invoicedetail">Invoice Detail</Link>
            </li>
            <li> <Link to="/admin/invoicelist">Invoice List</Link>
            </li>
            </ul>
        </li>
        
        
        <li className="menu-item">
            <a href="#" className="has-chevron" data-toggle="collapse" data-target="#customer" aria-expanded="false" aria-controls="customer"> <span><i className="fas fa-user-friends fs-16"></i>Customers </span>
            </a>
            <ul id="customer" className="collapse" aria-labelledby="customer" data-parent="#side-nav-accordion">
            <li> <a href="pages/customer/customersreview.html">Customers Review</a>
            </li>
            <li> <a href="pages/customer/customersreview.html">Customers List</a>
            </li>
            <li> <a href="pages/customer/social.html">Social Activity</a>
            </li>
            </ul>
        </li>
        
        
        <li className="menu-item">
            <Link to="/admin/sales"> <span><i className="fa fa-briefcase fs-16"></i>Sales</span>
            </Link>
        </li>
        
        <li className="menu-item">
            <a href="#" className="has-chevron" data-toggle="collapse" data-target="#bonuspages" aria-expanded="false" aria-controls="bonuspages"> <span><i className="material-icons fs-16">insert_drive_file</i> Bonus Pages</span>
            </a>
            <ul id="bonuspages" className="collapse" aria-labelledby="bonuspages" data-parent="#side-nav-accordion">
            <li> <a href="pages/dashboard/web-analytics.html"> Web Analytics </a>
            </li>
            <li> <a href="pages/dashboard/project-management.html">Stock Management</a>
            </li>
            <li> <a href="pages/dashboard/client-management.html">Client Management</a>
            </li>
            </ul>
        </li>
        
        
        <li className="menu-item">
            <a href="#" className="has-chevron" data-toggle="collapse" data-target="#apps" aria-expanded="false" aria-controls="apps"> <span><i className="material-icons fs-16">phone_iphone</i>Apps</span>
            </a>
            <ul id="apps" className="collapse" aria-labelledby="apps" data-parent="#side-nav-accordion">
            <li> <a href="pages/apps/chat.html">Chat</a>
            </li>
            <li> <a href="pages/apps/email.html">Email</a>
            </li>
            <li> <a href="pages/apps/to-do-list.html">To-do List</a>
            </li>
            </ul>
        </li>
        
        </ul>
    </aside>
    
    <aside id="ms-recent-activity" className="side-nav fixed ms-aside-right ms-scrollable">
        <div className="ms-aside-header">
        <ul className="nav nav-tabs tabs-bordered d-flex nav-justified mb-3" role="tablist">
            <li role="presentation" className="fs-12"><a href="#activityLog" aria-controls="activityLog" className="active" role="tab" data-toggle="tab"> Activity Log</a>
            </li>
            <li>
            <button type="button" className="close ms-toggler text-center" data-target="#ms-recent-activity" data-toggle="slideRight"><span aria-hidden="true">&times;</span>
            </button>
            </li>
        </ul>
        </div>
        <div className="ms-aside-body">
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane active fade show" id="activityLog">
            <ul className="ms-activity-log">
                <li>
                <div className="ms-btn-icon btn-pill icon btn-light"> <i className="flaticon-gear"></i>
                </div>
                <h6>Update 1.0.0 Pushed</h6>
                <span> <i className="material-icons">event</i>1 January, 2020</span>
                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                </li>
                <li>
                <div className="ms-btn-icon btn-pill icon btn-success"> <i className="flaticon-tick-inside-circle"></i>
                </div>
                <h6>Profile Updated</h6>
                <span> <i className="material-icons">event</i>4 March, 2018</span>
                <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                </li>
                <li>
                <div className="ms-btn-icon btn-pill icon btn-warning"> <i className="flaticon-alert-1"></i>
                </div>
                <h6>Your payment is due</h6>
                <span> <i className="material-icons">event</i>1 January, 2020</span>
                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                </li>
                <li>
                <div className="ms-btn-icon btn-pill icon btn-danger"> <i className="flaticon-alert"></i>
                </div>
                <h6>Database Error</h6>
                <span> <i className="material-icons">event</i>4 March, 2018</span>
                <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                </li>
                <li>
                <div className="ms-btn-icon btn-pill icon btn-info"> <i className="flaticon-information"></i>
                </div>
                <h6>Checkout what's Trending</h6>
                <span> <i className="material-icons">event</i>1 January, 2020</span>
                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                </li>
                <li>
                <div className="ms-btn-icon btn-pill icon btn-secondary"> <i className="flaticon-diamond"></i>
                </div>
                <h6>Your Dashboard is ready</h6>
                <span> <i className="material-icons">event</i>4 March, 2018</span>
                <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                </li>
            </ul> <a href="#" className="btn btn-primary d-block"> View All </a>
            </div>
        </div>
        </div>
    </aside>
    </div>
    )
}

export default Sidenv
