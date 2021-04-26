import React,{useState} from 'react'
import axios from 'axios'
import { HorizontalBar } from 'react-chartjs-2'

const Restraunt = () => {
    const [menuitem, setmenuitem] = useState('')
    const [location, setlocation] = useState('')
    const [radius, setradius] = useState(3)
    const [dockermenuresult, setdockermenuresult] = useState('')
    const [menuitems,price]=[[],[]]
    const fetchresult = (e) =>{
        e.preventDefault()
        if(location && menuitem){
            axios.get(`/getMenuItems?menuitem=${menuitem}&address=${location}&radius=${radius}`)
            .then(res=>{
                setdockermenuresult(res.data.documenu_results); 
                console.log(res.data)})
            .catch(err=>console.log(err))
        }
        else{
            alert("You cannot leave any field empty.")
        }
    }
    if(dockermenuresult){
        for(let i=0;i<dockermenuresult.length;i++){
            menuitems[i] = dockermenuresult[i].menu_item_name || 1;
            price[i] = dockermenuresult[i].menu_item_price;
        }
    }


    return (
        <>
        
        <center>
        <form>
        <label>Menuitem</label><input value={menuitem} placeholder="Enter the menu item" autoFocus onChange={(e)=>setmenuitem(e.target.value)} type="text" required/><br/>
        <label>Location </label><input value={location} placeholder="Enter the location" onChange={(e)=>setlocation(e.target.value)} type="text" required/> <br/>
        <label>Radius </label><input value={radius} placeholder="Enter the radius within which you want to search " onChange={(e)=>setradius(e.target.value)} type="number" /><br/>
            <button type="submit" onClick={fetchresult}>Search</button>
        </form>
        </center>
        <div>
            {
                dockermenuresult && 
                <div style={{height:'500px'}}>
                
                <HorizontalBar  
            data = {{
                labels: menuitems,
        datasets: [
            {
                label: 'price',
                backgroundColor: ' rgba(11, 156, 49, 0.6)',
                borderColor: 'rgba(255, 79, 132, 1)',
                borderWidth: 1,
                data:price
            }
        ]
            }}
            width={500}
            height={500}
            options={{ 
                maintainAspectRatio: false,
                indexAxis: 'y',
                responsive: true,
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                scales:{
                    xAxes:[{
                        ticks:{
                            beginAtZero:true,
                        }
                    }],
                }
            }}
            />

                </div>
            }
            {dockermenuresult && 
            <div>
                <ol>{dockermenuresult.map(res => <li>{res.restaurant_name}<div>Address :{res.address.formatted}</div><div>Phone :{res.restaurant_phone}</div><div>Restraunt hours :{res.restaurant_hours}</div><ol>{res.cuisines.map(data=><li>{data}</li>)}</ol>Menu item name :{res.menu_item_name}<div>Price : ${res.menu_item_price}</div><div>Menu item description : {res.menu_item_description}</div><div>Subsection : {res.subsection}</div><div>Subsection description : {res.subsection_description}</div><hr/><br/></li>)}</ol>
            </div>
            }
            
        </div>
        </>
    )
}

export default Restraunt
