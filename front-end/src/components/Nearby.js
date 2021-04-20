import React, { useState } from 'react'
import axios from 'axios'
import Chart from './Chart'

const Nearby = () => {
    const [location,setlocation] = useState('')
    const [restraunt_type,setRestraunt_type] = useState('')
    const [results, setResults] = useState([])
    const [rest_name,price_level,rating,vicinity] = [[],[],[],[]]
    const fetchresult = (e) => {
        e.preventDefault()
        if(location && restraunt_type){
            axios.get(`/find_nearby_places?address=${location}&keyword=${restraunt_type}`)
            .then(res=>{setResults(res.data.google_results); console.log(res.data)})
            .catch(err=>console.log(err))
        }
        else{
            alert("You cannot leave any field empty.")
        }
    }
    if(results){
        for(let i=0;i<results.length;i++){
            rest_name[i] = results[i].name;
            price_level[i]=results[i].price_level || 0.5;
            rating[i]=results[i].rating;
            vicinity[i]=results[i].vicinity;
        }
    }
    
    return (
        <>
        <center>
        <form>
            <label>Location </label><input value={location} placeholder="Enter the location" autoFocus={true} onChange={(e)=>setlocation(e.target.value)} type="text" required/> <br/>
            <label>Restraunt Type </label><input value={restraunt_type} placeholder="Enter the restraunt type" onChange={(e)=>setRestraunt_type(e.target.value)} type="text" required/><br/>
            <button type="submit" onClick={fetchresult}>Search</button>
        </form>
        </center>
        <div>
            {results && <div style={{height:'400px'}}><Chart rest_name={rest_name} price_level={price_level} rating={rating} vicinity={vicinity} restraunt_type={restraunt_type}/></div> }
        </div>
        </>
    )
}

export default Nearby
