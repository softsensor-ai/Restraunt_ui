import React from 'react'
import food1 from '../assets/img/costic/food-1.jpg'
import food2 from '../assets/img/costic/food-2.jpg'
import food3 from '../assets/img/costic/food-3.jpg'
import food4 from '../assets/img/costic/food-4.jpg'
import food5 from '../assets/img/costic/food-5.jpg'
import food6 from '../assets/img/costic/food-6.jpg'

const MenuCatolgue = () => {
    return (
        <div className="row">
            <div className="col-md-12">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                <li className="breadcrumb-item"><a href="#"><i className="material-icons">home</i> Home</a></li>
                <li className="breadcrumb-item"><a href="#">Menu</a></li>
                <li className="breadcrumb-item active" aria-current="page">Menu Catalogue</li>
                </ol>
            </nav>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="ms-card">
                <div className="ms-card-img">
                <img src={food1} alt="card_img"/>
                </div>
                <div className="ms-card-body ">
                <div className="wrapper-new2 ">
                    <h6>Pizza</h6>
                    <span className="white">$15</span>
                </div>
                <div className="wrapper-new1">
                    <span>Total Order :<strong className="color-red">150</strong> </span>
                    <span>Revenue :<strong className="color-red">$1000</strong></span>


                </div>
                <a href="#" className="btn btn-primary btn-md btn-block">See More</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="ms-card">
                <div className="ms-card-img">
                <img src={food2} alt="card_img"/>
                </div>
                <div className="ms-card-body ">
                <div className="wrapper-new2">
                    <h6>Sandwiches</h6>
                    <span className="white">$23</span>
                </div>
                <div className="wrapper-new1">
                    <span>Total Order :<strong className="color-red">150</strong> </span>
                    <span>Revenue :<strong className="color-red">$1000</strong></span>


                </div>
                <a href="#" className="btn btn-primary btn-block">See More</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="ms-card">
                <div className="ms-card-img">
                <img src={food3} alt="card_img"/>
                </div>
                <div className="ms-card-body ">
                <div className="wrapper-new2">
                    <h6>Fries</h6>
                    <span className="white">$15</span>
                </div>
                <div className="wrapper-new1">
                    <span>Total Order :<strong className="color-red">100</strong> </span>
                    <span>Revenue :<strong className="color-red">$1400</strong></span>


                </div>
                <a href="#" className="btn btn-primary btn-block">See More</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="ms-card">
                <div className="ms-card-img">
                <img src={food4} alt="card_img"/>
                </div>
                <div className="ms-card-body ">
                <div className="wrapper-new2">
                    <h6>Burger</h6>
                    <span className="white">$34</span>
                </div>
                <div className="wrapper-new1">
                    <span>Total Order :<strong className="color-red">200</strong> </span>
                    <span>Revenue :<strong className="color-red">$5000</strong></span>


                </div>
                <a href="#" className="btn btn-primary btn-block">See More</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="ms-card">
                <div className="ms-card-img">
                <img src={food5} alt="card_img"/>
                </div>
                <div className="ms-card-body ">
                <div className="wrapper-new2">
                    <h6>Grilled</h6>
                    <span className="white">$25</span>
                </div>
                <div className="wrapper-new1">
                    <span>Total Order :<strong className="color-red">180</strong> </span>
                    <span>Revenue :<strong className="color-red">$2000</strong></span>


                </div>
                <a href="#" className="btn btn-primary btn-block">See More</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="ms-card">
                <div className="ms-card-img">
                <img src={food6} alt="card_img"/>
                </div>
                <div className="ms-card-body ">
                <div className="wrapper-new2">
                    <h6>Dumplings</h6>
                    <span className="white">$15</span>
                </div>
                <div className="wrapper-new1">
                    <span>Total Order :<strong className="color-red">150</strong> </span>
                    <span>Revenue :<strong className="color-red">$3000</strong></span>


                </div>
                <a href="#" className="btn btn-primary btn-block">See More</a>
                </div>
            </div>
            </div>
            <div className="col-xl-12 col-md-12">
            <div className="load">
                <i className="fas fa-redo alt  space text-muted" aria-hidden="true"></i><span className="more">Load More</span>
            </div>
            </div>
        </div>
    )
}

export default MenuCatolgue
