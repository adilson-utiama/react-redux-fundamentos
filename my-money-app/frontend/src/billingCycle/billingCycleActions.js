import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const INITIAL_VALUES = {}

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
                              init()
                        ])
                  })
                  .catch(e => {
                        e.response.data.errors.forEach(error => {
                              toastr.error('Error', error)
                        })
                  })
      }

}

export function showUpdate(billingCycle) {
      //redux-multi
      return [
            showTabs('tabUpdate'),
            selectTab('tabUpdate'),
            initialize('billingCycleForm', billingCycle)
      ]
}

export function init() {
      return [
            showTabs('tabList', 'tabCreate'),
            selectTab('tabList'),
            getList(),
            initialize('billingCycleForm', INITIAL_VALUES)
      ]
}