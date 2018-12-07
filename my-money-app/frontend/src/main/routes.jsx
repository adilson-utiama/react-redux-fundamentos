import React from "react"
import { Router, Route, Redirect, hashHistory } from "react-router"

//Referente ao teste com Dashboard sem REDUX
//import Dashboard from '../dashboard2/dashboard2'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
      <Router history={ hashHistory } >
            <Route path='/' component={ Dashboard } />
            <Route path='/billingCycle' component={ BillingCycle } />
            <Redirect from='*' to='/' />
      </Router>

)