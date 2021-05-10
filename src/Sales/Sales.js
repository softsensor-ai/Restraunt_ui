import React from 'react'
import pizza from "../assets/img/costic/pizza.jpg"
import frenchfrie from "../assets/img/costic/french-fries.jpg"
import cereal from "../assets/img/costic/cereals.jpg"
import sandwich from "../assets/img/costic/egg-sandwich.jpg"
import { Link } from 'react-router-dom'

const Sales = () => {
    return (
    <div class="row">
            
            <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb pl-0">
                    <li class="breadcrumb-item"><Link to="/admin"><i class="material-icons">home</i> Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Sales</li>
                </ol>
            </nav>
            </div>

        <div class="col-12">
        <div class="ms-panel">
            <div class="ms-panel-header">
                <h6>Product Sale</h6>
            </div>
            <div class="ms-panel-body">

            <div class="table-responsive">
                
                <div id="data-table-1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                    
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length" id="data-table-1_length">
                                <label>Show 
                                <select name="data-table-1_length" aria-controls="data-table-1" class="custom-select custom-select-sm form-control form-control-sm">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select> 
                                </label>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-6">
                            <div id="data-table-1_filter" class="dataTables_filter">
                                <label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-1"/></label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-12">
                            <table id="data-table-1" class="table table-hover w-100 dataTable no-footer" role="grid" aria-describedby="data-table-1_info" style={{width: "1098px"}}>
                                <thead>
                                    <tr role="row">
                                        <th class="sorting_asc" tabindex="0" aria-controls="data-table-1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Product ID: activate to sort column descending" style={{width: "170px"}}>Product ID</th>
                                        <th class="sorting" tabindex="0" aria-controls="data-table-1" rowspan="1" colspan="1" aria-label="Product Name: activate to sort column ascending" style={{width: "317px"}}>Product Name</th>
                                        <th class="sorting" tabindex="0" aria-controls="data-table-1" rowspan="1" colspan="1" aria-label="Quantity: activate to sort column ascending" style={{width: "144px"}}>Quantity</th>
                                        <th class="sorting" tabindex="0" aria-controls="data-table-1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: "154px"}}>Status</th>
                                        <th class="sorting" tabindex="0" aria-controls="data-table-1" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" style={{width: "103px"}}>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">01475</td>
                                        <td><img src={frenchfrie} style={{width:"50px", height:"30px"}}/>French Fries</td>
                                        <td>6741</td><td>In Stock</td><td>$47</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td class="sorting_1">02351</td>
                                        <td><img src={pizza} style={{width:"50px",height:"30px"}}/>French Crostini</td>
                                        <td>8899</td>
                                        <td>In Stock</td>
                                        <td>$16</td>
                                    </tr>
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">12121</td>
                                        <td><img src={sandwich} style={{width:"50px",height:"30px"}}/>Noodels</td>
                                        <td>6224</td>
                                        <td>In Stock</td>
                                        <td>$43</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td class="sorting_1">12145</td>
                                        <td><img src={sandwich} style={{width:"50px",height:"30px"}}/>Garlic Bread</td>
                                        <td>1965</td>
                                        <td>Out Of Stock</td>
                                        <td>$3</td>
                                    </tr>
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">14451</td>
                                        <td><img src={pizza} style={{width:"50px",height:"30px"}}/>pizza</td>
                                        <td>5384</td>
                                        <td>Out Of Stock</td>
                                        <td>$85</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td class="sorting_1">14526</td>
                                        <td><img src={sandwich} style={{width:"50px",height:"30px"}}/>Lemon Rice</td>
                                        <td>2860</td>
                                        <td>In Stock</td>
                                        <td>$21</td>
                                    </tr>
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">15451</td>
                                        <td><img src={pizza} style={{width:"50px",height:"30px"}}/>Fried Rice</td>
                                        <td>8240</td>
                                        <td>In Stock</td>
                                        <td>$32</td>
                                    </tr>
                                    <tr role="row" class="even">
                                        <td class="sorting_1">15485</td>
                                        <td><img src={frenchfrie} style={{width:"50px",height:"30px"}}/>Baked Nachos</td>
                                        <td>3023</td>
                                        <td>In Stock</td>
                                        <td>$10</td>
                                    </tr>
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">22366</td>
                                        <td><img src={sandwich} style={{width:"50px",height:"30px"}}/>Multigrain Hot Cereal</td>
                                        <td>2558</td>
                                        <td>Out Of Stock</td>
                                        <td>$13</td>
                                    </tr>
                                    <tr role="row" class="even"><td class="sorting_1">25252</td>
                                        <td><img src={cereal} style={{width:"50px",height:"30px"}}/> Sandwich</td>
                                        <td>4804</td>
                                        <td>In Stock</td>
                                        <td>$37</td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-12 col-md-5">
                            <div class="dataTables_info" id="data-table-1_info" role="status" aria-live="polite">Showing 1 to 10 of 36 entries</div>
                        </div>
                        <div class="col-sm-12 col-md-7">
                            <div class="dataTables_paginate paging_simple_numbers" id="data-table-1_paginate">
                                <ul class="pagination has-gap">
                                    <li class="paginate_button page-item previous disabled" id="data-table-1_previous"><a href="#" aria-controls="data-table-1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                                    <li class="paginate_button page-item active"><a href="#" aria-controls="data-table-1" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                    <li class="paginate_button page-item "><a href="#" aria-controls="data-table-1" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                    <li class="paginate_button page-item "><a href="#" aria-controls="data-table-1" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                    <li class="paginate_button page-item "><a href="#" aria-controls="data-table-1" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                    <li class="paginate_button page-item next" id="data-table-1_next"><a href="#" aria-controls="data-table-1" data-dt-idx="5" tabindex="0" class="page-link">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    </div>
    )
}

export default Sales
