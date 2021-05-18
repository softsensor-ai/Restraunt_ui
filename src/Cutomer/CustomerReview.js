import React from 'react'
import customer1 from "../assets/img/costic/customer-1.jpg"
import customer2 from "../assets/img/costic/customer-2.jpg"
import customer3 from "../assets/img/costic/customer3.jpg"
import customer4 from "../assets/img/costic/customer-4.jpg"
import customer5 from "../assets/img/costic/customer-5.jpg"

const CustomerReview = () => {
    return (
        <>
        <div class="row">
        <div class="col-12">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb pl-0">
            <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a>
            </li>
            <li class="breadcrumb-item"><a href="#">Customer</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Customers Review</li>
        </ol>
        </nav>
    </div>
    </div>

    <div class="ms-content-wrapper">
        <div class="row">
        <div class="col-xl-12 col-md-12">
        <div class="ms-panel ms-panel-fh">
            <div class="ms-panel-body p-0">
            <ul class="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                <li class="ms-list-item">
                <a href="#" class="media clearfix">
                    <img src={customer1} class="ms-img-round ms-img-small" alt="This is another feature"/>
                    <div class="media-body">
                    <div class="customer-meta">
                        <div class="new">
                        <h5 class="ms-feed-user mb-0">John Doe</h5>
                        <h6 class="ml-4 mb-0 text-red">Grilled Sandwich</h6>
                        </div>
                        <ul class="ms-star-rating rating-fill rating-circle ratings-new">
                        <li class="ms-rating-item"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        </ul>
                    </div> <span class="my-2 d-block"> <i class="material-icons">date_range</i> December 24, 2020</span>
                    <p class="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="ms-feed-controls"> <span>
                        <i class="material-icons">chat</i> 16
                        </span>
                        <span>
                        <i class="material-icons">attachment</i> 3
                        </span>
                        </div>
                    </div>
                    </div>
                </a>
                </li>
                <li class="ms-list-item">
                <a href="#" class="media clearfix">
                    <img src={customer2} class="ms-img-round ms-img-small" alt="This is another feature"/>
                    <div class="media-body">
                    <div class="customer-meta">
                        <div class="new">
                        <h5 class="ms-feed-user mb-0">Ricky Martin</h5>
                        <h6 class="ml-4 mb-0 text-red">Fried Egg Sandwich</h6>
                        </div>
                        <ul class="ms-star-rating rating-fill rating-circle ratings-new">
                        <li class="ms-rating-item"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        </ul>
                    </div> <span class="my-2 d-block"> <i class="material-icons">date_range</i> December 24, 2020</span>
                    <p class="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="ms-feed-controls"> <span>
                        <i class="material-icons">chat</i> 16
                        </span>
                        <span>
                        <i class="material-icons">attachment</i> 3
                        </span>
                        </div>
                    </div>
                    </div>
                </a>
                </li>
                <li class="ms-list-item">
                <a href="#" class="media clearfix">
                    <img src={customer3} class="ms-img-round ms-img-small" alt="This is another feature"/>
                    <div class="media-body">
                    <div class="customer-meta">
                        <div class="new">
                        <h5 class="ms-feed-user mb-0">Joe semual</h5>
                        <h6 class="ml-4 mb-0 text-red">Peri Peri Fries</h6>
                        </div>
                        <ul class="ms-star-rating rating-fill rating-circle ratings-new">
                        <li class="ms-rating-item"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        </ul>
                    </div> <span class="my-2 d-block"> <i class="material-icons">date_range</i> December 24, 2020</span>
                    <p class="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="ms-feed-controls"> <span>
                        <i class="material-icons">chat</i> 16
                        </span>
                        <span>
                        <i class="material-icons">attachment</i> 3
                        </span>
                        </div>
                    </div>
                    </div>
                </a>
                </li>
                <li class="ms-list-item">
                <a href="#" class="media clearfix">
                    <img src={customer4} class="ms-img-round ms-img-small" alt="This is another feature"/>
                    <div class="media-body">
                    <div class="customer-meta">
                        <div class="new">
                        <h5 class="ms-feed-user mb-0">Ricky Martin</h5>
                        <h6 class="ml-4 mb-0 text-red">Spicy Grilled Burger</h6>
                        </div>
                        <ul class="ms-star-rating rating-fill rating-circle ratings-new">
                        <li class="ms-rating-item"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        </ul>
                    </div> <span class="my-2 d-block"> <i class="material-icons">date_range</i> December 24, 2020</span>
                    <p class="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="ms-feed-controls"> <span>
                        <i class="material-icons">chat</i> 16
                        </span>
                        <span>
                        <i class="material-icons">attachment</i> 3
                        </span>
                        </div>
                    </div>
                    </div>
                </a>
                </li>
                <li class="ms-list-item">
                <a href="#" class="media clearfix">
                    <img src={customer5} class="ms-img-round ms-img-small" alt="This is another feature"/>
                    <div class="media-body">
                    <div class="customer-meta">
                        <div class="new">
                        <h5 class="ms-feed-user mb-0">Lim Shojin</h5>
                        <h6 class="ml-4 mb-0 text-red">Grilled Sandwich</h6>
                        </div>
                        <ul class="ms-star-rating rating-fill rating-circle ratings-new">
                        <li class="ms-rating-item"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        <li class="ms-rating-item rated"> <i class="material-icons">star</i>
                        </li>
                        </ul>
                    </div> <span class="my-2 d-block"> <i class="material-icons">date_range</i> December 24, 2020</span>
                    <p class="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="ms-feed-controls"> <span>
                        <i class="material-icons">chat</i> 16
                        </span>
                        <span>
                        <i class="material-icons">attachment</i> 3
                        </span>
                        </div>
                    </div>
                    </div>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default CustomerReview
