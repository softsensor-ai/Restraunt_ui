import React,{useState} from 'react'

const ChartRevenue = ({heading}) => {
    const [month_drop_value,setMonth_drop_value] = useState(1)
    return (
        <div className="col-xl-12 col-md-12">
        <div className="ms-panel ms-panel-fh">
        <div className="ms-panel-header new">
            <h6>{heading}</h6>
            <select className="form-control new" id="exampleSelect" value={month_drop_value} onChange={(e)=>setMonth_drop_value(e.target.value)}>
            <option value="1">Today</option>
            <option value="2">Yesterday</option>
            <option value="3">Last week</option>
            <option value="4">This week</option>
            <option value="5">Last 30 days</option>
            <option value="6">Day of the week</option>
            <option value="7">Holidays</option>
            </select>
        </div>
        <div className="ms-panel-body">
            <span className="progress-label"> <strong>{(month_drop_value==1 || month_drop_value==2)?'10am - 12am':(month_drop_value==3 || month_drop_value==4)?"Monday":"Week 1"}</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <span className="progress-label"> <strong>{(month_drop_value==1 || month_drop_value==2)?'12am - 2pm':(month_drop_value==3 || month_drop_value==4)?"Tuesday":"Week 2"}</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            <span className="progress-label"> <strong>{(month_drop_value==1 || month_drop_value==2)?'2pm - 4pm':(month_drop_value==3 || month_drop_value==4)?"Wednesday":"Week 3"}</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
            <span className="progress-label"> <strong>{(month_drop_value==1 || month_drop_value==2)?'6pm - 8pm':(month_drop_value==3 || month_drop_value==4)?"Thursday":"Week 4"}</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
            {month_drop_value<5?<>
            <span className="progress-label"> <strong>{(month_drop_value==1 || month_drop_value==2)?'8pm - 10pm':(month_drop_value==3 || month_drop_value==4)?"Friday":""}</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div> </>
            :""}
            {(month_drop_value==3 || month_drop_value==4)?<>
                <span className="progress-label"> <strong>Saturday</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "63%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">63%</div>
            </div>
            <span className="progress-label"> <strong>Sunday</strong> </span>
            <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "73%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">73%</div>
            </div>
            </>:""}
        </div>
        </div>
    </div>
    )
}

export default ChartRevenue
