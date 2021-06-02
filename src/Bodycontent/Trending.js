import React from 'react'
import food_5 from '../assets/img/costic/food-5.jpg'
import food_2 from '../assets/img/costic/food-2.jpg'
import food_4 from '../assets/img/costic/food-4.jpg'
import food_3 from '../assets/img/costic/food-3.jpg'

const Trending = ({name}) => {
    return (
        <>
            <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-widget ms-crypto-widget">
            <div className="ms-panel-header">
                <h6>Trending {name}</h6>
            </div>
            <div className="ms-panel-body p-0">
                <ul className="nav nav-tabs nav-justified has-gap px-4 pt-4" role="tablist">
                <li role="presentation" className="fs-12"><a href="#btc" aria-controls="btc" className="active show" role="tab" data-toggle="tab"> Mon </a></li>
                <li role="presentation" className="fs-12"><a href="#xrp" aria-controls="xrp" role="tab" data-toggle="tab"> Tue </a></li>
                <li role="presentation" className="fs-12"><a href="#ltc" aria-controls="ltc" role="tab" data-toggle="tab"> Wed </a></li>
                <li role="presentation" className="fs-12"><a href="#eth" aria-controls="eth" role="tab" data-toggle="tab"> Thu </a></li>
                <li role="presentation" className="fs-12"><a href="#zec" aria-controls="zec" role="tab" data-toggle="tab"> Fri </a></li>
                <li role="presentation" className="fs-12"><a href="#zec" aria-controls="zec" role="tab" data-toggle="tab"> Sat </a></li>
                <li role="presentation" className="fs-12"><a href="#zec" aria-controls="zec" role="tab" data-toggle="tab"> Sun </a></li>
                </ul>
                <div className="ms-panel-body">
                    <div className="row">

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="ms-card no-margin">
                        <div className="ms-card-img">
                            <img src={food_5} alt="card_img"/>
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
                            <img src={food_2} alt="card_img"/>
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
                            <img src={food_4} alt="card_img"/>
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
                            <img src={food_3} alt="card_img"/>
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
        </div>
        </>
    )
}

export default Trending
