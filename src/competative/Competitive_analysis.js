import React, { useState } from 'react'
import axios from 'axios'
import LineChart from '../assets/Charts/LineChart'
import BarChart from '../assets/Charts/BarChart'
import DonoutChart from '../assets/Charts/DonoutChart'

const Competative_analysis = () => {
    const [zip_code,set_zipcode] = useState('')
    const [delivery_type,setDeivery_type]=useState('')
    const [delivery_type_sales,setDeivery_type_sales]=useState('')

    const [del_value,setDel_value]=useState('7')
    const [del_value_sale,setDel_value_sale]=useState('7')
    const endDate = (value) => {
        

    }
    const findRestraunt = (e) =>{

        axios.get(`/competitor_analysis/find_nearby_orders?zip=${zip_code}&start_date=2021-03-01&end_date=2021-04-10`)
        .then((res)=>{
            console.log(res.data)
            if(res.status==200){
                setDeivery_type(res.data.delivery_type);
                setDeivery_type_sales(res.data.delivery_type_sales)
            }
        })
        console.log(delivery_type)
        console.log(delivery_type_sales)
    }
    const changeChart = (e) => {

    }
    return (
        <>
        <div className=" mb-3">
        <div style={{display:"flex"}}>
        <input type="number" value={zip_code} onChange={(e)=>set_zipcode(e.target.value)} className="form-control" placeholder="Enter zipcode to find nearby restraunt " aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <button className="btn btn-outline-info mt-0 p-0" type="button" onClick={findRestraunt}><i className="flaticon-search text-disabled"></i></button>
        </div>


        <div className="container mt-3 mb-3" style={{width:"85%",color:'white'}}>
        <div className="row">
        <div className="col">
        <select className='col-lg-6 col-md-6 col-sm-6' value={del_value} onChange={(e)=>{setDel_value(e.target.value)}} onClick={changeChart}>
            <option value="7">Last 7 days</option>
            <option value="30">Last month</option>
            <option value="60">Last 2 month</option>
        </select>
        <select className='col-lg-6 col-md-6 col-sm-6' value={del_value_sale} onChange={(e)=>{setDel_value_sale(e.target.value)}} onClick={changeChart}>
            <option value="7">Last 7 days</option>
            <option value="30">Last month</option>
            <option value="60">Last 2 month</option>
        </select>
        </div>
        <div className="row">
        <LineChart delivery_type={delivery_type} delivery_type_sales={delivery_type_sales} className="col-xl-6 col-lg-6 col-md-6 col-xs-12"/>
        <BarChart className="col-xl-6 col-lg-6 col-md-6 col-xs-12"/>
        <DonoutChart className="col-xl-6 col-lg-6 col-md-6 col-xs-12"/>
        </div>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default Competative_analysis
