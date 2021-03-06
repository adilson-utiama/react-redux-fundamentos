import React from "react"
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router"

//Referente ao teste com Dashboard sem REDUX
//import Dashboard from '../dashboard2/dashboard2'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'

export default props => (
      <Router history={ hashHistory } >
            <Route path='/' component={ AuthOrApp }>
                  <Route path='/billingCycle' component={ BillingCycle } />
                  <IndexRoute component={ Dashboard } />
            </Route>
            <Redirect from='*' to='/' />
      </Router>

)