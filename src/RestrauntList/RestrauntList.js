import React from 'react'
import pizza from "../assets/img/costic/pizza.jpg"
import frenchfrie from "../assets/img/costic/french-fries.jpg"
import cereal from "../assets/img/costic/cereals.jpg"
import sandwich from "../assets/img/costic/egg-sandwich.jpg"

const RestrauntList = () => {
    return (
        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0">
              <li className="breadcrumb-item"><a href="#"><i className="material-icons">home</i> Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Restaurant List</li>

            </ol>
          </nav>
          
          <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-header">
                <h6>Restaurant wise sales</h6>

              </div>
              <div className="ms-panel-body">

                <div className="row">
                  <div className="col-xl-4 col-md-4">
                    <div className="ms-graph-labels column-direction">
                      <div className="ms-chart-no-label">
                        <span className="bg-success"></span> <p>$9,348,319</p>
                      </div>
                      <div className="ms-chart-no-label">
                        <span className="bg-primary"></span> <p>$4,344,316</p>
                      </div>
                      <div className="ms-chart-no-label">
                        <span className="bg-warning"></span> <p>$518,513</p>
                      </div>
                      <div className="ms-chart-no-label">
                        <span className="bg-danger"></span> <p>$348,319</p>
                      </div>
                      <div className="ms-chart-no-label">
                        <span className="bg-secondary"></span> <p>$3,416,139</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-8"><div className="chartjs-size-monitor" style={{position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", visibility: "hidden", zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"1000000px",height:"1000000px",left:0,top:0}}></div></div><div className="chartjs-size-monitor-shrink" style={{position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",visibility:"hidden",zIndex:-1}}><div style={{position:"absolute",width:"200%",height:"200%",left:0, top:0}}></div></div></div>
                    <canvas id="pie-chart" style={{display: "block", height: "164px", width: "329px", width:"411", height:"205", className:"chartjs-render-monitor"}}></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="ms-panel">
            <div className="ms-panel-header new">
              <h6>Top Food Menu</h6>
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
                      <td className="ms-table-f-w"> <img src={pizza} alt="people"/> Pizza </td>
                      <td>$20</td>
                      <td>67384917</td>
                    </tr>
                    <tr>
                      <td className="ms-table-f-w"> <img src={frenchfrie} alt="people"/> French Fries </td>
                      <td>$14</td>
                      <td>789393819</td>
                    </tr>
                    <tr>
                      <td className="ms-table-f-w"> <img src={cereal} alt="people"/> Multigrain Hot Cereal </td>
                      <td>$25</td>
                      <td>137893137</td>
                    </tr>
                    <tr>
                      <td className="ms-table-f-w"> <img src={sandwich} alt="people"/> Fried Egg Sandwich </td>
                      <td>$10</td>
                      <td>235193138</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
                    <div className="col-xl-12">
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6>Invoice List</h6>
              </div>
              <div className="ms-panel-body">

                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                    <thead>
                      <tr>
                        <th scope="col">Restaurant ID</th>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Ratings</th>
                         <th scope="col">Joining Date</th>

                            <th scope="col">Restaurant Sale(%)</th>
                            <th scope="col">Send / Edit / Delete</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">15451</th>
                        <td>Delizus</td>
                        <td> New York</td>
                          <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                    <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                    <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  </ul></td>
                             <td>12/10/19</td>
                            <td>90</td>
                            <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                              <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">15452</th>
                          <td>Lumina</td>
                        <td> New York</td>
                        <td><ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                          <td>20/9/19</td>
                          <td>99</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">45263</th>
                            <td>Food Loung</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>15/10/19</td>
                          <td>95</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">45865</th>
                        <td>Hungry House</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                          <td>21/11/19</td>
                          <td>88</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">56652</th>
                        <td>Luncheon</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>12/11/19</td>
                          <td>81</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">65845</th>
                        <td>Spice 'n' Steam</td>
                        <td> New York</td>
                        <td><ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>20/10/19</td>
                          <td>91</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">65425</th>
                        <td>Tomato</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>12/10/19</td>
                          <td>77</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">54556</th>
                        <td>Bardojo</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                          <td>12/11/19</td>
                          <td>78</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">45556</th>
                        <td>Deliceiux</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>22/10/19</td>
                          <td>88</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">55856</th>
                        <td>Food Forest</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>12/10/19</td>
                          <td>75</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">36456</th>
                        <td>Food Bella</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                          <td>18/11/19</td>
                          <td>90</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
                      </tr>
                      <tr>
                        <th scope="row">78456</th>
                        <td>Red Chilly</td>
                        <td> New York</td>
                        <td> <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                  <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                  <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                </ul></td>

                           <td>12/10/19</td>
                          <td>85</td>
                           <td><a href="#"><i className="fas fa-paper-plane text-secondary text-success"></i></a>
                            <a href="#"><i className="fas fa-pencil-alt text-secondary"></i></a>
                            <a href="a.html"><i className="far fa-trash-alt ms-text-danger"></i></a></td>
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

export default RestrauntList
