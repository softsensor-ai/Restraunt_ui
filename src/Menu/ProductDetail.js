import React from 'react'
import banner1 from "../assets/img/costic/banner-1.jpg"
import banner2 from "../assets/img/costic/banner-2.jpg"
import banner3 from "../assets/img/costic/banner-3.jpg"
import {Link} from 'react-router-dom'

const ProductDetail = ({match,history}) => {
    const productid = match.params.id;
    console.log(productid)
    return (
        <div className="row">

        <div className="col-md-12">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0">
            <li className="breadcrumb-item"><Link to="/admin"><i className="material-icons">home</i> Home</Link></li>
            <li className="breadcrumb-item"><a href="#">Menu</a></li>
            <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
            </ol>
        </nav>
        </div>
        <div className="col-md-12">
        <div className="ms-panel">
            <div className="ms-panel-header">
            <h6>Product Details</h6>
            </div>
            <div className="ms-panel-body">

            <div id="arrowSlider" className="ms-arrow-slider carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={banner1} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h3 className="text-white">Pizaa img 1</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner2} alt="Second slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                    <h3 className="text-white">Pizaa img 2</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner3} alt="Third slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                    <h3 className="text-white">Pizaa img 3</h3>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#arrowSlider" role="button" data-slide="prev">
                <span className="material-icons" aria-hidden="true">keyboard_arrow_left</span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#arrowSlider" role="button" data-slide="next">
                <span className="material-icons" aria-hidden="true">keyboard_arrow_right</span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        </div>
        </div>


<div className=" col-md-6">
        <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-body">
            <h4 className="section-title bold">Product Info</h4>
            <table className="table ms-profile-information">
                <tbody>

                <tr>
                    <th scope="row">Price</th>
                    <td>$15</td>
                </tr>
                <tr>
                    <th scope="row">Product Category</th>
                    <td>Veg</td>
                </tr>
                <tr>
                    <th scope="row">Availiblity</th>
                <td><span className="badge badge-pill badge-primary">In stock</span></td>
                </tr>
                <tr>
                    <th scope="row">Delivery Charges</th>
                    <td>Free</td>
                </tr>

                <tr>
                    <th scope="row">SKU Identification</th>
                    <td>23445</td>
                </tr>

                </tbody>
            </table>
            <div className="new">
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-secondary">Delete</button>
            </div>

            </div>
        </div>
        </div>

        <div className=" col-md-6">
        <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-body">

            <h4 className="section-title bold">Product Details </h4>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book type and scrambled it to make a type specimen book.</p>


            </div>
            <div className="ms-quick-stats">
                <div className="ms-stats-grid">
                <i className="fa fa-bullhorn"></i>
                <p className="ms-text-dark">1,033</p>
                <span>Today Order</span>
                </div>
                <div className="ms-stats-grid">
                <i className="fa fa-heart"></i>
                <p className="ms-text-dark">3,039</p>
                <span>Favourite</span>
                </div>
            </div>
        </div>
        </div>

    </div>
    )
}

export default ProductDetail
