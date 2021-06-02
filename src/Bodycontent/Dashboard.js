import React, { useState } from 'react'

import food_5 from '../assets/img/costic/food-5.jpg'
import food_2 from '../assets/img/costic/food-2.jpg'
import food_4 from '../assets/img/costic/food-4.jpg'
import food_3 from '../assets/img/costic/food-3.jpg'

import ChartRevenue from './ChartRevenue'
import TimingChart from './TimingChart'
import Trending from './Trending'

const Bodycon = () => {
    const [chartdata1,setChartData1] = useState([0, 7, 6, 3, 5, 4, 2, 3, 6, 7.5, 5, 7])
    const [chartdata2,setChartData2] = useState([0, 5, 4, 2, 7, 6, 3, 4, 2, 1, 5, 8])
    const [chartlabel,setChartlabel] = useState(["10 AM","12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"])
    const [order_drop_value,setOrder_drop_value] = useState(1)

    const [restraunt_name,setRestrauntName] = useState(1)
    const [sellsgraph,setSellsgraph]=useState("24,951")
    const [totalvisitor,setTotalVisitor]=useState("12,973")
    const [newUser,setNewUser]=useState("18,333")
    const [totalOrders,setTotalOrders]=useState("148,973")

    const [totalOrder,setTotalOrder]=useState("9,023")
    const [newOrder,setNewOrder]=useState("3,132")
    const [cancelOrder,setCancelOrder]=useState("221")
    const [repeatOrder,setRepeatOrder]=useState("5,670")


    const changeRestraunt = (e) => {
        setRestrauntName(e.target.value)
        switch(e.target.value){
            case '1': 
                    setSellsgraph("24,951")
                    setTotalVisitor("12,973")
                    setNewUser("18,333")
                    setTotalOrders("148,973")
                    break;
            case '2': 
                    setSellsgraph("8,451")
                    setTotalVisitor("3,973")
                    setNewUser("7,333")
                    setTotalOrders("48,973")
                    break;
            case '3':
                    setSellsgraph("9,451")
                    setTotalVisitor("4,973")
                    setNewUser("6,383")
                    setTotalOrders("58,903")
                    break;
            case '4':
                    setSellsgraph("7,421")
                    setTotalVisitor("3,623")
                    setNewUser("5,323")
                    setTotalOrders("53,903")
                    break;
        }   
    }
    const setOrderTiming = (e) => {
        setOrder_drop_value(e.target.value)
        switch(e.target.value){
            case '1': 
                    setTotalOrder("9,023")
                    setNewOrder("3,132")
                    setCancelOrder("221")
                    setRepeatOrder("5,670")
                    setChartlabel(["10 AM","12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"])
                    break;
            case '2':
                    setTotalOrder("9,750")
                    setNewOrder("4,145")
                    setCancelOrder("240")
                    setRepeatOrder("5,370")
                    setChartlabel(["10 AM","12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"])
                    break;
            case '3':
                    setTotalOrder("63,161")
                    setNewOrder("21,924")
                    setCancelOrder("1,547")
                    setRepeatOrder("3,690")
                    setChartlabel(["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"])
                    break;
            case '4':
                    setTotalOrder("68,250")
                    setNewOrder("29,015")
                    setCancelOrder("1547")
                    setRepeatOrder("36,690")
                    setChartlabel(["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"])
                    break;
            case '5':
                    setTotalOrder("292,500")
                    setNewOrder("124,350")
                    setCancelOrder("7,200")
                    setRepeatOrder("161,100")
                    setChartlabel(["Week 1","Week 2","Week 3","Week 4"])
                    break;
                    
            case '6':
                    setTotalOrder()
                    setNewOrder()
                    setCancelOrder()
                    setRepeatOrder()
                    break;
            case '7':
                    setTotalOrder()
                    setNewOrder()
                    setCancelOrder()
                    setRepeatOrder()
                    break;
        }  
    }
    const [head_data, setHeadData]=useState("Sells Revenue")
    const [prev,setPrev] = useState(" ")
    const changeBlockdata = (e) =>{
        setPrev(e.target.id);
        setHeadData(e.target.text);
    }

    return (    
    <div className="row">
    <div className="col-md-12">
        <div className="ms-panel-header new pr-0 pl-0" style={{borderBottom:0}}>
        <h1 className="db-header-title">Welcome, Anne</h1>
            <select className="form-control new" id="exampleSelect" value={restraunt_name} onChange={changeRestraunt}>
            <option value="1" selected>Overall Restraunts data</option>
            <option value="2">Restraunt-1</option>
            <option value="3">Restraunt-2</option>
            <option value="4">Restraunt-3</option>
            </select>
        </div>
    </div>
    {/*  */}
    <div className="col-xl-12 col-md-12">
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
    {/*  */}
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:1000000,height:1000000,left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-green"><i className="material-icons">arrow_upward</i> 3.2%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong><a style={{cursor:"pointer"}} id="sells" className={prev==="sells"?"active":""} onClick={changeBlockdata}>Sells Revenue</a></strong></span>
            <h2>${" "+sellsgraph}</h2>
            </div>
        </div>
        <canvas id="line-chart" style={{display: "block", height: "130px", width: "262px"}}  width="327" height="162" className="chartjs-render-monitor">
            
        </canvas>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-red"><i className="material-icons">arrow_downward</i> 4.5%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong><a style={{cursor:"pointer"}} id="visitor" className={prev==="visitor"?"active":""}  onClick={changeBlockdata}>Total Visitors</a></strong></span>
            <h2>{totalvisitor}</h2>
            </div>
        </div>
        <canvas id="line-chart-2" width="327" height="162" style={{display: "block", height: "130px", width: "262px"}} className="chartjs-render-monitor"> </canvas>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-green"><i className="material-icons">arrow_upward</i> 12.5%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong><a style={{cursor:"pointer"}} id="users" className=""  onClick={changeBlockdata}>New Users</a></strong></span>
            <h2>{newUser}</h2>
            </div>
        </div>
        <canvas id="line-chart-3" width="327" height="162" style={{display: "block", height: "130px", width: "262px"}} className="chartjs-render-monitor"></canvas>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
        <span className="ms-chart-label bg-red"><i className="material-icons">arrow_downward</i> 9.5%</span>
        <div className="ms-card-body media">
            <div className="media-body">
            <span className="black-text"><strong><a style={{cursor:"pointer"}} id="orders" className="" onClick={changeBlockdata}>Total Orders</a></strong></span>
            <h2>{totalOrders}</h2>
            </div>
        </div>
        <canvas id="line-chart-4" width="327" height="162" style={{display: "block", height: "130px", width: "262px"}} className="chartjs-render-monitor"></canvas>
        </div>
    </div>

    <ChartRevenue heading={head_data}/>
    
    <div className="col-xl-12 col-md-12" >
        <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header new">
                <h6>{head_data}</h6>
                <select className="form-control new" id="chartSelect" value={order_drop_value} onChange={setOrderTiming}>
                    <option value="1">Today</option>
                    <option value="2">Yesterday</option>
                    <option value="3">Last week</option>
                    <option value="4">This week</option>
                    <option value="5">Last 30 days</option>
                    <option value="6">Day of the week</option>
                    <option value="7">Holidays</option>
                </select>

        </div>
        <div className="ms-panel-body pt-0"><div className="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", pointerEvents: "none",visibility: "hidden", zIndex: -1}}>
            <div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}>
                <div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}>
                </div>
            </div>
            <div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}>
                <div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}>
                    </div></div></div>
            <div className="d-flex justify-content-between ms-graph-meta">
            <ul className="ms-list-flex mt-3 mb-5">
                <li>
                <span>{head_data}</span>
                <h3 className="ms-count">{totalOrder}</h3>
                </li>
                <li>
                <span>New {head_data}</span>
                <h3 className="ms-count">{newOrder}</h3>
                </li>
                <li>
                <span> {head_data+" "} Repeated</span>
                <h3 className="ms-count">{repeatOrder}</h3>
                </li>
                <li>
                <span> {head_data+" "}Cancelled</span>
                <h3 className="ms-count">{cancelOrder}</h3>
                </li>
            </ul>
            </div>
            
            <div id="youtube-subscribers" maxWidth="758" maxeight="378" style={{display: "block", height: "50vh", width: "auto"}} className="chartjs-render-monitor" >
                <TimingChart className="constainer" heading={head_data} data_1={chartdata1} style={{height:"auto"}} data_2={chartdata2} labels={chartlabel} />
            </div>
        </div>
        </div>
    </div>
    

        {/* <div className="ms-panel">
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
        </div> */}

    <Trending name="Orders"/>
    <Trending name="Restraunts"/>
    
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
            <h6>Restaurants Review</h6>

        </div>
        <div className="ms-panel-body">
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card no-margin">
                <div className="ms-card-body">
                    <div className="media fs-14">
                    <div className="media-body">
                        <h6>Restaurant-1</h6>
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
                    <img src={food_3} alt="card_img"/>
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
                    
                    <div className="media-body">
                        <h6>Restraunt-2</h6>
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
                    <img src={food_5} alt="card_img"/>
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
                    <div className="media-body">
                        <h6>Restraunt-3 </h6>
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
                    <img src={food_4} alt="card_img"/>
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

    </div>
    )
}

export default Bodycon
