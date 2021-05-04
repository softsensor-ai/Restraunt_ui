import React from 'react'

const Order = () => {
    return (
        <div className="row">

        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0">
              <li className="breadcrumb-item"><a href="#"><i className="material-icons">home</i> Home</a></li>
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
                        <td> Jhon Leo</td>
                          <td> New Town</td>
                        <td><span className="badge badge-primary">Pending</span></td>
                          <td>10:05</td>
                            <td>$10</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                          <td>Mango Pie</td>
                        <td>Kristien</td>
                        <td> Old Town</td>
                      <td><span className="badge badge-dark">Cancelled</span></td>
                        <td>14:05</td>
                          <td>$9</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                            <td>FrieD Egg Sandwich</td>
                        <td>Jack Suit</td>
                        <td> Oxford Street</td>
                      <td><span className="badge badge-success">Delivered</span></td>
                        <td>12:05</td>
                          <td>$19</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Lemon Yogurt Parfait</td>
                        <td>Alesdro Guitto</td>
                        <td>  Church hill</td>
                          <td><span className="badge badge-success">Delivered</span></td>
                        <td>12:05</td>
                          <td>$18</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Spicy Grill Sandwich</td>
                        <td>Jacob Sahwny</td>
                        <td>  palace Road</td>
                        <td><span className="badge badge-success">Delivered</span></td>
                        <td>12:05</td>
                          <td>$21</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Chicken  Sandwich</td>
                        <td>Peter Gill</td>
                        <td> Street 21</td>
                       <td><span className="badge badge-primary">Pending</span></td>
                        <td>12:05</td>
                          <td>$15</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                            <td> Sandwich</td>
                        <td>Jack Suit</td>
                        <td> 40, Street</td>
                      <td><span className="badge badge-success">Delivered</span></td>
                        <td>11:05</td>
                          <td>$19</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                            <td>Spaghetti</td>
                        <td>Jack Suit</td>
                        <td> Oxford Street</td>
                      <td><span className="badge badge-success">Delivered</span></td>
                        <td>12:05</td>
                          <td>$19</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                            <td>Fried Rice</td>
                        <td>Jack Suit</td>
                        <td> Hilltown Street</td>
                      <td><span className="badge badge-success">Delivered</span></td>
                        <td>12:05</td>
                          <td>$19</td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                            <td>Noodels</td>
                        <td>Jack Suit</td>
                        <td> Oxford Street</td>
                      <td><span className="badge badge-success">Delivered</span></td>
                        <td>12:05</td>
                          <td>$19</td>
                      </tr>

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
