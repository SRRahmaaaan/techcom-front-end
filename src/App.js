import React from 'react'
import {Switch, Route} from "react-router-dom"
import AddService from './Admin/AddService/AddService'
import Admin from './Admin/Admin/Admin'
import ManageServices from './Admin/ManageServices/ManageServices'
import MakeAdmin from './Admin/MekeAdmin/MakeAdmin'
import OrderList from './Admin/OrderList/OrderList'
import "./App.css"
import PrivateRoute from "./Authentication/PrivateRoute/PrivateRoute"
import Authentication from './Authentication/Authentication/Authentication'
import Provider from './Authentication/Context/Context'
import Home from './Home/Home/Home'
import Orders from './Home/Orders/Orders/Orders'
import BookingList from './Home/Orders/BookingList/BookingList'
import ServiceReview from './Home/Orders/ServiceReview/ServiceReview'
import AdminRoute from './Admin/AdminRoute/AdminRoute'

const App = () => {
  return (
        <Provider>
          <Switch>
            <Route exact path="/" component={Home} />
            <AdminRoute path="/admin" component={Admin} />
            <AdminRoute path="/admin/orderList" component={OrderList} />
            <AdminRoute path="/addService" component={AddService} />
            <AdminRoute path="/manageServices" component={ManageServices} />
            <AdminRoute path="/addAdmin" component={MakeAdmin} />
            <PrivateRoute path="/orders/:id" component={Orders} />
            <PrivateRoute path="/orders" component={Orders} />
            <PrivateRoute path="/bookings" component={BookingList} />
            <PrivateRoute path="/review" component={ServiceReview} />
            <Route path="/login" component={Authentication} />
          </Switch>
        </Provider>
  );
}

export default App
