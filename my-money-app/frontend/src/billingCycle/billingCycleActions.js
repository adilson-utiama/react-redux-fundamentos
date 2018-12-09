import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'

//Imprtando outras Actons Creators
import { showTabs, selectTab } from '../common/tab/tabActions'

export function getList() {
      const request = axios.get(`${BASE_URL}/billingCycles`)
      return {
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
      }
}

export function create(values) {
      //'dispatch' provido pelo middleware redux-thunk
      return dispatch => {
            axios.post(`${BASE_URL}/billingCycles`, values)
                  .then(resp => {
                        toastr.success('Sucesso', 'Operação realizada com sucesso.')
                        //Passando varias actions para executar com redux-multi
                        dispatch([
                              resetForm('billingCycleForm'), //reseta form (passando id do form)
                              getList(),
                              selectTab('tabList'),
                              showTabs('tabList', 'tabCreate')
                        ])
                  })
                  .catch(e => {
                        e.response.data.errors.forEach(error => {
                              toastr.error('Error', error)
                        })
                  })
      }

}