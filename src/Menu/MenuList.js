import React from 'react'
import Menuitem from './Menuitem'

const MenuList = () => {
    return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                <h6>Product List</h6>
                
                </div>
                
                <div className="ms-panel-body">
                <div className="table-responsive">
                    <div id="data-table-5_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_length" id="data-table-5_length">
                                    <label>Show <select name="data-table-5_length" aria-controls="data-table-5" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> </label></div></div><div className="col-sm-12 col-md-6"><div id="data-table-5_filter" className="dataTables_filter"><label><input type="search" className="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-5"/></label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <table id="data-table-5" className="table w-100 thead-primary dataTable no-footer" role="grid" aria-describedby="data-table-5_info" style={{width: "1099px"}}>
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Product ID: activate to sort column descending" style={{width: "165px"}}>Product ID</th>
                                            <th className="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Product Name: activate to sort column ascending" style={{width: "325px"}}>Product Name</th>
                                            <th className="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Quantity: activate to sort column ascending" style={{width: "141px"}}>Quantity</th>
                                            <th className="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: "156px"}}>Status</th>
                                            <th className="sorting" tabindex="0" aria-controls="data-table-5" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" style={{width: "102px"}}>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd"><td className="sorting_1">01475</td><td><img src="../../assets/img/costic/french-fries.jpg" style={{width:"50px",height:"30px"}}/>French Fries</td><td>6741</td><td>In Stock</td><td>$47</td></tr>
                                        <tr role="row" className="even"><td className="sorting_1">02351</td><td><img src="../../assets/img/costic/pizza.jpg" style={{width:"50px",height:"30px"}}/>French Crostini</td><td>8899</td><td>In Stock</td><td>$16</td></tr>
                                        <tr role="row" className="odd"><td className="sorting_1">12121</td><td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{width:"50px",height:"30px"}}/>Noodels</td><td>6224</td><td>In Stock</td><td>$43</td></tr>
                                        <tr role="row" className="even"><td className="sorting_1">12145</td><td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{width:"50px",height:"30px"}}/>Garlic Bread</td><td>1965</td><td>Out Of Stock</td><td>$3</td></tr>
                                        <tr role="row" className="odd"><td className="sorting_1">14451</td><td><img src="../../assets/img/costic/french-fries.jpg" style={{width:"50px",height:"30px"}}/>pizza</td><td>5384</td><td>Out Of Stock</td><td>$85</td></tr><tr role="row" className="even"><td className="sorting_1">14526</td><td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{width:"50px",height:"30px"}}/>Lemon Rice</td><td>2860</td><td>In Stock</td><td>$21</td></tr>
                                        <tr role="row" className="odd"><td className="sorting_1">15451</td><td><img src="../../assets/img/costic/pizza.jpg" style={{width:"50px",height:"30px"}}/>Fried Rice</td><td>8240</td><td>In Stock</td><td>$32</td></tr>
                                        <tr role="row" className="even"><td className="sorting_1">15485</td><td><img src="../../assets/img/costic/french-fries.jpg" style={{width:"50px",height:"30px"}}/>Baked Nachos</td><td>3023</td><td>In Stock</td><td>$10</td></tr>
                                        <tr role="row" className="odd"><td className="sorting_1">22366</td><td><img src="../../assets/img/costic/egg-sandwich.jpg" style={{width:"50px",height:"30px"}}/>Multigrain Hot Cereal</td><td>2558</td><td>Out Of Stock</td><td>$13</td></tr>
                                        <tr role="row" className="even"><td className="sorting_1">25252</td><td><img src="../../assets/img/costic/cereals.jpg" style={{width:"50px",height:"30px"}}/> Sandwich</td><td>4804</td><td>In Stock</td><td>$37</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div className="dataTables_info" id="data-table-5_info" role="status" aria-live="polite">Showing 1 to 10 of 36 entries</div></div>
                                    <div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="data-table-5_paginate">
                                        <ul className="pagination has-gap">
                                            <li className="paginate_button page-item previous disabled" id="data-table-5_previous"><a href="#" aria-controls="data-table-5" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li>
                                            <li className="paginate_button page-item active"><a href="#" aria-controls="data-table-5" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="data-table-5" data-dt-idx="2" tabindex="0" className="page-link">2</a></li>
                                            <li className="paginate_button page-item "><a href="#" aria-controls="data-table-5" data-dt-idx="3" tabindex="0" className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="data-table-5" data-dt-idx="4" tabindex="0" className="page-link">4</a></li><li className="paginate_button page-item next" id="data-table-5_next"><a href="#" aria-controls="data-table-5" data-dt-idx="5" tabindex="0" className="page-link">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default MenuList
