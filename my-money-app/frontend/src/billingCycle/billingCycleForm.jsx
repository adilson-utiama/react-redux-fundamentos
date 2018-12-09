import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class BillingCycleForm extends Component {

      render() {

            //destructure from this.props
            const { handleSubmit } = this.props

            //O componente <Field /> conecta cada entrada à 'store'
            return (
                  <form role='form' onSubmit={ handleSubmit }>
                        <div className='box-body'>
                              <Field name='name' component='input' />
                              <Field name='month' component='input' />
                              <Field name='year' component='input' />
                        </div>
                        <div className='box-footer'>
                              <button type='submit' className='btn btn-primary'>
                                    Submit
                              </button>
                        </div>
                  </form>
            )

      }
}

//Para fazer com que seu componente de formulário se comunique com o 'store', 
//precisamos envolvê-lo com reduxForm (). 
//Ele fornecerá os adereços sobre o estado e a 
//função do formulário para manipular o processo de envio.
export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)