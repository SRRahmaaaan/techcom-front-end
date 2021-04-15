import React from 'react'
import {Switch, Route} from "react-router-dom"
import AddService from './Admin/AddService/AddService'
import Admin from './Admin/Admin/Admin'
import ManageServices from './Admin/ManageServices/ManageServices'
import MakeAdmin from './Admin/MekeAdmin/MakeAdmin'
import OrderList from './Admin/OrderList/OrderList'
import "./App.css"
import Home from './Home/Home/Home'

const App = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/orderList" component={OrderList} />
          <Route path="/addService" component={AddService} />
          <Route path="/manageServices" component={ManageServices} />
          <Route path="/addAdmin" component={MakeAdmin} />
        </Switch>
  );
}

export default App
