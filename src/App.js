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

const App = () => {
  return (
        <Provider>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/admin/orderList" component={OrderList} />
            <PrivateRoute path="/addService" component={AddService} />
            <PrivateRoute path="/manageServices" component={ManageServices} />
            <PrivateRoute path="/addAdmin" component={MakeAdmin} />
            <Route path="/login" component={Authentication} />
          </Switch>
        </Provider>
  );
}

export default App
