import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuGrid from './MenuGrid'
import MenuList from './MenuList'

const Menuitem = () => {
    const [listview,setlistview] = useState(true)
    const [view,setview]=useState(true)
    return (
        <div className="row">
        <div className="col-md-12">
        <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                <li className="breadcrumb-item"><Link to="/admin"><i className="material-icons">home</i> Home</Link></li>
                <li className="breadcrumb-item" aria-current="page"><Link to="/admin/menu">Menu</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/menu">Menu</Link></li>
                <li className="ml-auto">
                <label className="ms-switch">
                    <input type="checkbox" id="change-view" onChange={()=>{setlistview(!listview); setview(!view)}}/>
                    <span className="ms-switch-slider round"></span>
                </label>
                {view?'List View':'Grid View'}    </li>
                </ol>
        </nav>
        {listview?<MenuList/>:<MenuGrid/>}
        </div>
        </div>
    )
}

export default Menuitem
