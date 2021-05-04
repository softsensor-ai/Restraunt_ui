import React from 'react'
import food1 from '../assets/img/costic/food-1.jpg'
import food2 from '../assets/img/costic/food-2.jpg'
import food3 from '../assets/img/costic/food-3.jpg'
import food4 from '../assets/img/costic/food-4.jpg'
import food5 from '../assets/img/costic/food-5.jpg'
import food6 from '../assets/img/costic/food-6.jpg'
import food7 from '../assets/img/costic/food-7.jpg'
import food8 from '../assets/img/costic/food-8.jpg'


const MenuGrid = () => {
    return (
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food1} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">

                    <div className="new">
                        <h6 className="mb-0">Veggies </h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:1467 </p>
                        <span className="badge badge-success">In Stock</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food2} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Garlic Bread </h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:6224 </p>
                        <span className="badge badge-primary">Out of Stock</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food3} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Veg Sandwich </h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:1467 </p>
                        <span className="badge badge-success">In Stock</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn  grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food4} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Roast Sandwich</h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:6224 </p>
                        <span className="badge badge-primary">Out of Stock</span>
                    </div>


                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food5} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Burger</h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:1467 </p>
                        <span className="badge badge-success">In Stock</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food6} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Veggies </h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:1467 </p>
                        <span className="badge badge-success">In Stock</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food7} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Pepperoni Pizza </h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:6224 </p>
                        <span className="badge badge-primary">Out of Stock</span>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                    <div className="ms-card-img">
                    <img src={food8} alt="card_img"/>
                    </div>
                    <div className="ms-card-body">
                    <div className="new">
                        <h6 className="mb-0">Egg McMuffin </h6>
                        <h6 className="ms-text-primary mb-0">$45.50</h6>
                    </div>
                    <div className="new meta">
                        <p>Qty:1467 </p>
                        <span className="badge badge-success">In Stock</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing</p>
                    <div className="new mb-0">
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                        <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default MenuGrid
