import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const INITIAL_VALUES = { credits: [ {} ], debts: [ {} ] }

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
      return submit(values, 'post')
}

export function update(values) {
      return submit(values, 'put')
}

export function remove(values) {
      return submit(values, 'delete')
}

function submit(values, method) {
      const id = values._id ? values._id : ''

      //'dispatch' provido pelo middleware redux-thunk
      return dispatch => {
            axios[method](`${BASE_URL}/billingCycles/${ id }`, values)
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

export function showDelete(billingCycle) {
      //redux-multi
      return [
            showTabs('tabDelete'),
            selectTab('tabDelete'),
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