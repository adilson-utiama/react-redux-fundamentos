import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions';

class BillingCycleForm extends Component {

      render() {

            //destructure from this.props
            const { handleSubmit, readOnly } = this.props

            //O componente <Field /> conecta cada entrada à 'store'
            return (
                  <form role='form' onSubmit={ handleSubmit }>
                        <div className='box-body'>
                              <Field name='name' component={ labelAndInput } 
                                    label='Nome' cols='12 4' placeholder='Informe o nome'
                                    readOnly={ readOnly } />
                              <Field name='month' component={ labelAndInput } type='number'
                                    label='Mês' cols='12 4' placeholder='Informe o mês'
                                    readOnly={ readOnly } />
                              <Field name='year' component={ labelAndInput } type='number'
                                    label='Ano' cols='12 4' placeholder='Informe o ano'
                                    readOnly={ readOnly }/>
                        </div>
                        <div className='box-footer'>
                              <button type='submit' className='btn btn-primary'>
                                    Submit
                              </button>
                              <button type='button' className='btn btn-default'
                                    onClick={ this.props.init }>Cancelar</button>
                        </div>
                  </form>
            )

      }
}

//Para fazer com que seu componente de formulário se comunique com o 'store', 
//precisamos envolvê-lo com reduxForm (). 
//Ele fornecerá os adereços sobre o estado e a 
//função do formulário para manipular o processo de envio.
// em { form: ID_DO_FORM } 
//Decorando BillingCycle com reduxForm 
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)