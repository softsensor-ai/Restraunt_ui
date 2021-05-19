
// import './bootstrap.min.css'
import './index.css'

import Navbar from './Navbar/Navbar'
import Sidenav from './Navbar/Sidenv'
import Bodycon from './Bodycontent/Dashboard'
import Rightnav from './Navbar/Rightnav'
import Chart from './components/Chart'
import MenuCatolgue from './Menu/MenuCatolgue'
import MenuList from './Menu/MenuList'
import MebuGrid from './Menu/MenuGrid'
import MenuGrid from './Menu/MenuGrid'
import AddProduct from './Menu/AddProduct'
import ProductDetail from './Menu/ProductDetail'
import Order from './Order/Order'
import RestrauntList from './RestrauntList/RestrauntList'
import InvoiceDetail from './Invoice/InvoiceDetail'
import InvoiceList from './Invoice/InvoiceList'
import Sales from './Sales/Sales'
import CustomerReview from './Cutomer/CustomerReview'
import CustomerList from './Cutomer/CustomerList'
import Menuitem from './Menu/Menuitem'
import { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Error from '../src/Error/Error'
import userProfile from './UserData/userProfile'
import Signin from './UserData/Signin'
import Signup from './UserData/Signup'
import Lockscreen from './UserData/Lockscreen'


function App() {

  return (
    <BrowserRouter>
    <Switch>
      {/* {!localStorage.getItem('token')?
      <Route path="/" exact component={Signin}/>:<>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/lockscreen" exact component={Lockscreen}/> */}
    <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar " id="main">
    <Sidenav />
    <main className="body-content">
    <Navbar/>
    <div className="ms-content-wrapper" id="showcomponent">
        <Route path='/admin' exact component={Bodycon} />
        <Route path='/admin/menu' exact component={Menuitem} />
        <Route path='/admin/addproduct' exact component={AddProduct} />
        <Route path='/admin/profile' exact component={userProfile}/>
        <Route path='/admin/email' exact component={userProfile}/>
        <Route path='/admin/setting' exact component={userProfile}/>
        <Route path='/admin/lockscreen' exact component={Lockscreen}/>
        <Route path='/admin/order' exact component={Order}/>
        <Route path='/admin/restrauntlist' exact component={RestrauntList}/>
        <Route path='/admin/invoicedetail' exact component={InvoiceDetail}/>
        <Route path='/admin/invoicelist' exact component={InvoiceList}/>
        <Route path='/admin/sales' exact component={Sales}/>
        <Route path='/admin/productView/:id' exact component={ProductDetail} />


  {/* <Order/> */}

  {/* <RestrauntList/> */}

  {/* Invoice strats here */}
  {/* <InvoiceDetail/> */}
  {/* <InvoiceList/> */}
  {/* ends here */}

  {/* Customer section starts here */}
  {/* <CustomerReview/> */}
  {/* <CustomerList/> */}
  {/* ends here */}
  {/* <Sales/> */}
    </div>
    </main>
    <Rightnav/>
    </div> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;
