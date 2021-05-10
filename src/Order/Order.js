import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loader from '../UserData/Loader'

const Order = () => {
    const [orderdata,setorderdata]=useState([])
    useEffect(async ()=>{
      axios.get('/getorders')
      .then(res=>{setorderdata(res.data)})
      .catch(err=>console.error(err))
    },[])

    const excelDateToJSDate = (serial) => {
      const utc_days = Math.floor(serial - 25569);
      const utc_value = utc_days * 86400;
      const date_info = new Date(utc_value * 1000);
      const fractional_day = serial - Math.floor(serial) + 0.0000001;
      let total_seconds = Math.floor(86400 * fractional_day);
      const seconds = total_seconds % 60;
    
      total_seconds -= seconds;
    
      const hours = Math.floor(total_seconds / (60 * 60));
      const minutes = Math.floor(total_seconds / 60) % 60;
    
      const date = new Date(
        date_info.getFullYear(),
        date_info.getMonth(),
        date_info.getDate(),
        hours,
        minutes,
        seconds
      );
      return ''+date.toString().slice(0,-30)+'';
    }

    

    return (
        <div className="row">

        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0">
              <li className="breadcrumb-item"><Link to="/admin"><i className="material-icons">home</i> Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Orders</li>

            </ol>
          </nav>



          <div className="col-md-12">
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-header">
                <h6>Favourite Orders</h6>
              </div>
              <div className="ms-panel-body order-circle">

                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6">
                      <h6 className="text-center">Pizza</h6>
                    <div className="progress-rounded progress-round-tiny">

                      <div className="progress-value">12%</div>
                      <svg>
                        <circle className="progress-cicle bg-success animated" cx="65" cy="65" r="57" stroke-width="4" fill="none" aria-valuenow="12" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" role="slider" style={{strokeDashoffset: "315.165px"}}>
                        </circle>
                      </svg>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                        <h6 className="text-center">Mexican Noodels</h6>
                    <div className="progress-rounded progress-round-tiny">
                      <div className="progress-value">38.8%</div>
                      <svg>
                        <circle className="progress-cicle bg-primary animated" cx="65" cy="65" r="57" stroke-width="4" fill="none" aria-valuenow="38.8" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" role="slider" style={{strokeDashoffset: "219.183px"}}>
                        </circle>
                      </svg>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                      <h6 className="text-center">Spicy Salad</h6>
                    <div className="progress-rounded progress-round-tiny">
                      <div className="progress-value">78.8%</div>
                      <svg>
                        <circle className="progress-cicle bg-secondary animated" cx="65" cy="65" r="57" stroke-width="4" fill="none" aria-valuenow="78.8" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" role="slider" style={{strokeDashoffset: "75.926px"}}>
                        </circle>
                      </svg>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                      <h6 className="text-center">French Fries</h6>
                    <div className="progress-rounded progress-round-tiny">
                      <div className="progress-value">100%</div>
                      <svg>
                        <circle className="progress-cicle bg-dark animated" cx="65" cy="65" r="57" stroke-width="4" fill="none" aria-valuenow="100" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" role="slider" style={{strokeDashoffset: "0px"}}>
                        </circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-12">
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6> Order List</h6>
              </div>
              <div className="ms-panel-body">

                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Menu</th>
                        <th scope="col">Biz Date</th>
                        <th scope="col">Order type</th>
                          <th scope="col">Order Status</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(orderdata.length>0)?
                      orderdata.map((data,index)=><tr>
                        <th scope="row">{index+1}</th>
                        <td>{data.menu}</td>
                    <td>{excelDateToJSDate(data.bizDate)}</td>
                    <td>{data.orderType}</td>
                  <td><span className="badge badge-success">Delivered</span></td>
                    <td>$ {data.subTotal}</td>
                      <td>$ {data.amountPaid}</td>
                  </tr> )

                    :<Loader/>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    )
}

export default Order
