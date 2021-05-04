import React, { useState } from 'react'
import Chart from '../components/Chart'



const Bodycon = () => {
    const [value,setvalue] = useState('')
    return (    
    <div className="row">
    <div className="col-md-12">
        <h1 className="db-header-title">Welcome, Anny</h1>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:1000000,height:1000000,left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-black"><i className="material-icons">arrow_upward</i> 3.2%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong>Sells Graph</strong></span>
            <h2>$8,451</h2>
            </div>
        </div>
        <canvas id="line-chart" style={{display: "block", height: "130px", width: "262px"}} width="327" height="162" className="chartjs-render-monitor"></canvas>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-red"><i className="material-icons">arrow_downward</i> 4.5%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong>Total Visitors</strong></span>
            <h2>3,973</h2>
            </div>
        </div>
        <canvas id="line-chart-2" width="327" height="162" style={{display: "block", height: "130px", width: "262px"}} className="chartjs-render-monitor"> <Chart/> </canvas>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-black"><i className="material-icons">arrow_upward</i> 12.5%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong>New Users</strong></span>
            <h2>7,333</h2>
            </div>
        </div>
        <canvas id="line-chart-3" width="327" height="162" style={{display: "block", height: "130px", width: "262px"}} className="chartjs-render-monitor"></canvas>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-red"><i className="material-icons">arrow_upward</i> 9.5%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong>Total Orders</strong></span>
            <h2>48,973</h2>
            </div>
        </div>
        <canvas id="line-chart-4" width="327" height="162" style={{display: "block", height: "130px", width: "262px"}} className="chartjs-render-monitor"></canvas>
        </div>
    </div>
    
    <div className="col-xl-6 col-md-12">
        <div className="ms-panel">
        <div className="ms-panel-header">
            <div className="d-flex justify-content-between">
            <div className="align-self-center align-left">
                <h6>Recent Orders Requested</h6>
            </div>
            <button type="button" className="btn btn-primary">View All</button>
            </div>
        </div>
        <div className="ms-panel-body">
            <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Food Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Product ID</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="ms-table-f-w"> <img src="assets/img/costic/pizza.jpg" alt="people"/> Pizza </td>
                    <td>$19.99</td>
                    <td>67384917</td>
                </tr>
                <tr>
                    <td className="ms-table-f-w"> <img src="assets/img/costic/french-fries.jpg" alt="people"/> French Fries </td>
                    <td>$14.59</td>
                    <td>789393819</td>
                </tr>
                <tr>
                    <td className="ms-table-f-w"> <img src="assets/img/costic/cereals.jpg" alt="people"/> Multigrain Hot Cereal </td>
                    <td>$25.22</td>
                    <td>137893137</td>
                </tr>
                <tr>
                    <td className="ms-table-f-w"> <img src="assets/img/costic/egg-sandwich.jpg" alt="people"/> Fried Egg Sandwich </td>
                    <td>$11.23</td>
                    <td>235193138</td>
                </tr>

                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    <div className="col-xl-6 col-md-12">
        <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header new">
            <h6>Monthly Revenue</h6>
            <select className="form-control new" id="exampleSelect">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March </option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="1">June</option>
            <option value="2">July</option>
            <option value="3">August</option>
            <option value="4">September</option>
            <option value="5">October</option>
            <option value="4">November</option>
            <option value="5">December</option>
            </select>
        </div>
        <div className="ms-panel-body">
            <span className="progress-label"> <strong>Week 1</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <span className="progress-label"> <strong>Week 2</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            <span className="progress-label"> <strong>Week 3</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
            <span className="progress-label"> <strong>Week 4</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
        </div>
        </div>
    </div>
    
    <div className="col-md-12">
        <div className="ms-panel">
        <div className="ms-panel-header">
            <h6>Trending Orders</h6>
        </div>
        <div className="ms-panel-body">
            <div className="row">

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-5.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-body">
                    <div className="ms-card-heading-title">
                    <h6>Meat Stew</h6>
                    <span className="green-text"><strong>$25.00</strong></span>
                    </div>

                    <div className="ms-card-heading-title">
                    <p>Orders <span className="red-text">15</span></p>
                    <p>Income <span className="red-text">$175</span></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-2.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-body">
                    <div className="ms-card-heading-title">
                    <h6>Pancake</h6>
                    <span className="green-text"><strong>$50.00</strong></span>
                    </div>

                    <div className="ms-card-heading-title">
                    <p>Orders <span className="red-text">75</span></p>
                    <p>Income <span className="red-text">$275</span></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-4.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-body">
                    <div className="ms-card-heading-title">
                    <h6>Burger</h6>
                    <span className="green-text"><strong>$45.00</strong></span>
                    </div>

                    <div className="ms-card-heading-title">
                    <p>Orders <span className="red-text">85</span></p>
                    <p>Income <span className="red-text">$575</span></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-3.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-body">
                    <div className="ms-card-heading-title">
                    <h6>Saled</h6>
                    <span className="green-text"><strong>$85.00</strong></span>
                    </div>
                    <div className="ms-card-heading-title">
                    <p>Orders <span className="red-text">175</span></p>
                    <p>Income <span className="red-text">$775</span></p>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
    
    
    <div className="col-xl-7 col-md-12">
        <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header">
            <div className="d-flex justify-content-between">
            <div className="ms-header-text">
                <h6>Order Timing Chart</h6>
            </div>
            </div>

        </div>
        <div className="ms-panel-body pt-0"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
            <div className="d-flex justify-content-between ms-graph-meta">
            <ul className="ms-list-flex mt-3 mb-5">
                <li>
                <span>Total Orders</span>
                <h3 className="ms-count">703,49</h3>
                </li>
                <li>
                <span>New Orders</span>
                <h3 className="ms-count">95,038</h3>
                </li>
                <li>
                <span>Repeat Orders</span>
                <h3 className="ms-count">28,387</h3>
                </li>
                <li>
                <span>Cancel Orders</span>
                <h3 className="ms-count">260</h3>
                </li>
            </ul>
            </div>
            
            <div id="youtube-subscribers" width="758" height="378" style={{display: "block", height: "auto", width: "auto"}} className="chartjs-render-monitor">
                <Chart />
            </div>
        </div>
        </div>
    </div>

    
    <div className="col-xl-5 col-md-12">
        <div className="ms-panel ms-widget ms-crypto-widget">
        <div className="ms-panel-header">
            <h6>Favourite charts</h6>
        </div>
        <div className="ms-panel-body p-0">
            <ul className="nav nav-tabs nav-justified has-gap px-4 pt-4" role="tablist">
            <li role="presentation" className="fs-12"><a href="#btc" aria-controls="btc" className="active show" role="tab" data-toggle="tab"> Mon </a></li>
            <li role="presentation" className="fs-12"><a href="#xrp" aria-controls="xrp" role="tab" data-toggle="tab"> Tue </a></li>
            <li role="presentation" className="fs-12"><a href="#ltc" aria-controls="ltc" role="tab" data-toggle="tab"> Wed </a></li>
            <li role="presentation" className="fs-12"><a href="#eth" aria-controls="eth" role="tab" data-toggle="tab"> Thu </a></li>
            <li role="presentation" className="fs-12"><a href="#zec" aria-controls="zec" role="tab" data-toggle="tab"> Fri </a></li>
            </ul>
            <div className="tab-content">
            <div role="tabpanel" className="tab-pane active show fade in" id="btc">
                <div className="table-responsive">
                <table className="table table-hover thead-light">
                    <thead>
                    <tr>
                        <th scope="col">Restaurant Names</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Profit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hunger House</td>
                        <td>8528</td>
                        <td className="ms-text-success">+17.24%</td>
                        <td>7.65%</td>
                    </tr>
                    <tr>
                        <td>Food Lounge</td>
                        <td>4867</td>
                        <td className="ms-text-danger">-12.24%</td>
                        <td>9.12%</td>
                    </tr>
                    <tr>
                        <td>Delizious</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    <tr>
                        <td>Netherfood</td>
                        <td>1614</td>
                        <td className="ms-text-danger">-20.75%</td>
                        <td>12.25%</td>
                    </tr>
                    <tr>
                        <td>Rusmiz</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="xrp">
                <div className="table-responsive">
                <table className="table table-hover thead-light">
                    <thead>
                    <tr>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Profit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hunger House</td>
                        <td>8528</td>
                        <td className="ms-text-success">+17.24%</td>
                        <td>7.65%</td>
                    </tr>
                    <tr>
                        <td>Food Lounge</td>
                        <td>4867</td>
                        <td className="ms-text-danger">-12.24%</td>
                        <td>9.12%</td>
                    </tr>
                    <tr>
                        <td>Delizious</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    <tr>
                        <td>Netherfood</td>
                        <td>1614</td>
                        <td className="ms-text-danger">-20.75%</td>
                        <td>12.25%</td>
                    </tr>
                    <tr>
                        <td>Rusmiz</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="ltc">
                <div className="table-responsive">
                <table className="table table-hover thead-light">
                    <thead>
                    <tr>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Profit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hunger House</td>
                        <td>8528</td>
                        <td className="ms-text-success">+17.24%</td>
                        <td>7.65%</td>
                    </tr>
                    <tr>
                        <td>Food Lounge</td>
                        <td>4867</td>
                        <td className="ms-text-danger">-12.24%</td>
                        <td>9.12%</td>
                    </tr>
                    <tr>
                        <td>Delizious</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    <tr>
                        <td>Netherfood</td>
                        <td>1614</td>
                        <td className="ms-text-danger">-20.75%</td>
                        <td>12.25%</td>
                    </tr>
                    <tr>
                        <td>Rusmiz</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="eth">
                <div className="table-responsive">
                <table className="table table-hover thead-light">
                    <thead>
                    <tr>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Profit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hunger House</td>
                        <td>8528</td>
                        <td className="ms-text-success">+17.24%</td>
                        <td>7.65%</td>
                    </tr>
                    <tr>
                        <td>Food Lounge</td>
                        <td>4867</td>
                        <td className="ms-text-danger">-12.24%</td>
                        <td>9.12%</td>
                    </tr>
                    <tr>
                        <td>Delizious</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    <tr>
                        <td>Netherfood</td>
                        <td>1614</td>
                        <td className="ms-text-danger">-20.75%</td>
                        <td>12.25%</td>
                    </tr>
                    <tr>
                        <td>Rusmiz</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="zec">
                <div className="table-responsive">
                <table className="table table-hover thead-light">
                    <thead>
                    <tr>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Profit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hunger House</td>
                        <td>8528</td>
                        <td className="ms-text-success">+17.24%</td>
                        <td>7.65%</td>
                    </tr>
                    <tr>
                        <td>Food Lounge</td>
                        <td>4867</td>
                        <td className="ms-text-danger">-12.24%</td>
                        <td>9.12%</td>
                    </tr>
                    <tr>
                        <td>Delizious</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    <tr>
                        <td>Netherfood</td>
                        <td>1614</td>
                        <td className="ms-text-danger">-20.75%</td>
                        <td>12.25%</td>
                    </tr>
                    <tr>
                        <td>Rusmiz</td>
                        <td>7538</td>
                        <td className="ms-text-success">+32.04%</td>
                        <td>14.29%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>

        </div>
        </div>
        
        
        <div className="ms-panel">
        <div className="ms-panel-header">
            <h6>Total Earnings</h6>
        </div>
        <div className="ms-panel-body p-0">
            <div className="ms-quick-stats">
            <div className="ms-stats-grid">
                <i className="fa fa-star"></i>
                <p className="ms-text-dark">$8,033</p>
                <span>Today</span>
            </div>
            <div className="ms-stats-grid">
                <i className="fa fa-university"></i>
                <p className="ms-text-dark">$3,039</p>
                <span>Yesterday</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    
    <div className="col-12">
        <div className="ms-panel">
        <div className="ms-panel-header">
            <h6>Recently Placed Orders</h6>
        </div>
        <div className="ms-panel-body">
            <div className="table-responsive">
            <table className="table table-hover thead-primary">
                <thead>
                <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Order Name</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Delivered Time</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>French Fries</td>
                    <td>Jhon Leo</td>
                    <td>New Town</td>
                    <td><span className="badge badge-primary">Pending</span>
                    </td>
                    <td>10:05</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Mango Pie</td>
                    <td>Kristien</td>
                    <td>Old Town</td>
                    <td><span className="badge badge-dark">Cancelled</span>
                    </td>
                    <td>14:05</td>
                    <td>$9</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>FrieD Egg Sandwich</td>
                    <td>Jack Suit</td>
                    <td>Oxford Street</td>
                    <td><span className="badge badge-success">Delivered</span>
                    </td>
                    <td>12:05</td>
                    <td>$19</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Lemon Yogurt Parfait</td>
                    <td>Alesdro Guitto</td>
                    <td>Church hill</td>
                    <td><span className="badge badge-success">Delivered</span>
                    </td>
                    <td>12:05</td>
                    <td>$18</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Spicy Grill Sandwich</td>
                    <td>Jacob Sahwny</td>
                    <td>palace Road</td>
                    <td><span className="badge badge-success">Delivered</span>
                    </td>
                    <td>12:05</td>
                    <td>$21</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Chicken Sandwich</td>
                    <td>Peter Gill</td>
                    <td>Street 21</td>
                    <td><span className="badge badge-primary">Pending</span>
                    </td>
                    <td>12:05</td>
                    <td>$15</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    

    <div className="col-md-12">
        <div className="ms-panel">
        <div className="ms-panel-header">
            <h6>New Resturant Listings</h6>

        </div>
        <div className="ms-panel-body">
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-body">
                    <div className="media fs-14">
                    <div className="mr-2 align-self-center">
                        <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h6>Hunger House </h6>
                        <div className="dropdown float-right">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Sales</span>
                                </div>
                            </a>
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Details</span>
                                </div>
                            </a>
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Remove</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <p className="fs-12 my-1 text-disabled">30 seconds ago</p>
                    </div>

                    </div>
                    <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                    <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                </div>
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-1.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-footer text-disabled d-flex">
                    <div className="ms-card-options">
                    <i className="material-icons">favorite</i> 982
                    </div>
                    <div className="ms-card-options">
                    <i className="material-icons">comment</i> 785
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-body">
                    <div className="media fs-14">
                    <div className="mr-2 align-self-center">
                        <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h6>Food Lounge</h6>
                        <div className="dropdown float-right">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Sales</span>
                                </div>
                            </a>
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Details</span>
                                </div>
                            </a>
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Remove</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <p className="fs-12 my-1 text-disabled">30 seconds ago</p>
                    </div>

                    </div>
                    <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                    <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                </div>
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-2.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-footer text-disabled d-flex">
                    <div className="ms-card-options">
                    <i className="material-icons">favorite</i> 982
                    </div>
                    <div className="ms-card-options">
                    <i className="material-icons">comment</i> 785
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-body">
                    <div className="media fs-14">
                    <div className="mr-2 align-self-center">
                        <img src="assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people"/>
                    </div>
                    <div className="media-body">
                        <h6>Delizious </h6>
                        <div className="dropdown float-right">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li className="ms-dropdown-list">
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Sales</span>
                                </div>
                            </a>
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Details</span>
                                </div>
                            </a>
                            <a className="media p-2" href="#">
                                <div className="media-body">
                                <span>Remove</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <p className="fs-12 my-1 text-disabled">30 seconds ago</p>
                    </div>

                    </div>
                    <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                    <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                </div>
                <div className="ms-card-img">
                    <img src="assets/img/costic/food-3.jpg" alt="card_img"/>
                </div>
                <div className="ms-card-footer text-disabled d-flex">
                    <div className="ms-card-options">
                    <i className="material-icons">favorite</i> 982
                    </div>
                    <div className="ms-card-options">
                    <i className="material-icons">comment</i> 785
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

    
    <div className="col-xl-6 col-md-12">
        <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header">
            <div className="d-flex justify-content-between">
            <div className="align-self-center align-left">
                <h6>Recent Support Tickets</h6>
            </div>
            <a href="#" className="btn btn-primary"> View All</a>
            </div>
        </div>
        <div className="ms-panel-body p-0">
            <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
            <li className="ms-list-item">
                <a href="#" className="media clearfix">
                <img src="assets/img/costic/customer-4.jpg" className="ms-img-round ms-img-small" alt="This is another feature"/>
                <div className="media-body">
                    <div className="d-flex justify-content-between">
                    <h6 className="ms-feed-user mb-0">Lorem ipsum dolor</h6>
                    <span className="badge badge-success"> Open </span>
                    </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> December 24, 2020</span>
                    <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div className="d-flex justify-content-between align-items-end">
                    <div className="ms-feed-controls"> <span>
                        <i className="material-icons">chat</i> 16
                        </span>
                        <span>
                        <i className="material-icons">attachment</i> 3
                        </span>
                    </div>
                    </div>
                </div>
                </a>
            </li>
            <li className="ms-list-item">
                <a href="#" className="media clearfix">
                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round ms-img-small" alt="This is another feature"/>
                <div className="media-body">
                    <div className="d-flex justify-content-between">
                    <h6 className="ms-feed-user mb-0">Lorem ipsum dolor</h6>
                    <span className="badge badge-success"> Open </span>
                    </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> December 24, 2020</span>
                    <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div className="d-flex justify-content-between align-items-end">
                    <div className="ms-feed-controls"> <span>
                        <i className="material-icons">chat</i> 11
                        </span>
                        <span>
                        <i className="material-icons">attachment</i> 1
                        </span>
                    </div>
                    </div>
                </div>
                </a>
            </li>
            <li className="ms-list-item">
                <a href="#" className="media clearfix">
                <img src="assets/img/costic/customer-7.jpg" className="ms-img-round ms-img-small" alt="This is another feature"/>
                <div className="media-body">
                    <div className="d-flex justify-content-between">
                    <h6 className="ms-feed-user mb-0">Lorem ipsum dolor</h6>
                    <span className="badge badge-danger"> Closed </span>
                    </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> December 24, 2020</span>
                    <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div className="d-flex justify-content-between align-items-end">
                    <div className="ms-feed-controls"> <span>
                        <i className="material-icons">chat</i> 21
                        </span>
                        <span>
                        <i className="material-icons">attachment</i> 5
                        </span>
                    </div>
                    </div>
                </div>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    
    
    <div className="col-xl-6 col-md-12">
        <div className="ms-panel ms-panel-fh ms-widget ms-chat-conversations">
        <div className="ms-panel-header">
            <div className="ms-chat-header justify-content-between">
            <div className="ms-chat-user-container media clearfix">
                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people"/>
                </div>
                <div className="media-body ms-chat-user-info mt-1">
                <h6>Heather Brown</h6>
                <span className="text-disabled fs-12">
                    Active Now
                </span>
                </div>
            </div>
            <ul className="ms-list ms-list-flex ms-chat-controls">
                <li data-toggle="tooltip" data-placement="top" title="Call"> <i className="material-icons">local_phone</i>
                </li>
                <li data-toggle="tooltip" data-placement="top" title="Video Call"> <i className="material-icons">videocam</i>
                </li>
                <li data-toggle="tooltip" data-placement="top" title="Add to Chat"> <i className="material-icons">person_add</i>
                </li>
            </ul>
            </div>
        </div>
        <div className="ms-panel-body ms-scrollable ps">
            <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
            <div className="ms-chat-status ms-status-online ms-chat-img">
                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people"/>
            </div>
            <div className="media-body">
                <div className="ms-chat-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <p className="ms-chat-time">10:33 pm</p>
            </div>
            </div>
            <div className="ms-chat-bubble ms-chat-message ms-chat-incoming media clearfix">
            <div className="ms-chat-status ms-status-online ms-chat-img">
                <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people"/>
            </div>
            <div className="media-body">
                <div className="ms-chat-text">
                <p>I'm doing great, thanks for asking</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <p className="ms-chat-time">11:01 pm</p>
            </div>
            </div>
            <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
            <div className="ms-chat-status ms-status-online ms-chat-img">
                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people"/>
            </div>
            <div className="media-body">
                <div className="ms-chat-text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
                <p className="ms-chat-time">11:03 pm</p>
            </div>
            </div>
            <div className="ms-panel-footer">
            <div className="ms-chat-textbox">
                <ul className="ms-list-flex mb-0">
                <li className="ms-chat-vn"><i className="material-icons">mic</i>
                </li>
                <li className="ms-chat-input">
                    <input type="text" name="msg" placeholder="Enter Message" value={value} onChange={(e)=>setvalue(e.target.value)}/>
                </li>
                <li className="ms-chat-text-controls ms-list-flex"> <span> <i className="material-icons">tag_faces</i> </span>
                    <span> <i className="material-icons">attach_file</i> </span>
                    <span> <i className="material-icons">camera_alt</i> </span>
                </li>
                </ul>
            </div>
            </div>
        <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex="0" style={{left: 0, width: 0}}></div></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 0}}></div></div></div>
        </div>
    </div>
    </div>
    )
}

export default Bodycon
