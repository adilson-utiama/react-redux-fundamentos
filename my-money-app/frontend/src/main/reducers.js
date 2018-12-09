import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

//precisamos passar o formReducer para sua 'store'. 
//Ele serve para todos os seus componentes de formulário, 
//então você só precisa passá-lo uma vez
import { reducer as formReducer } from 'redux-form' 

//Reducer do redux-toastr
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
      dashboard: DashboardReducer,
      tab: TabReducer,
      billingCycle: BillingCycleReducer,
      form: formReducer,
      toastr: toastrReducer
})

export default rootReducer