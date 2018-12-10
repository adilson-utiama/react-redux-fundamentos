import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions';

import ItemList from './itemList'

class BillingCycleForm extends Component {

      render() {

            //destructure from this.props
            //propriedade 'credits' de billingCycle pelo 'init'
            const { handleSubmit, readOnly, credits, debts } = this.props

            //O componente <Field /> conecta cada entrada à 'store'
            return (
                  <form role='form' onSubmit={ handleSubmit }>
                        <div className='box-body'>
                              <Field name='name' component={ LabelAndInput } 
                                    label='Nome' cols='12 4' placeholder='Informe o nome'
                                    readOnly={ readOnly } />
                              <Field name='month' component={ LabelAndInput } type='number'
                                    label='Mês' cols='12 4' placeholder='Informe o mês'
                                    readOnly={ readOnly } />
                              <Field name='year' component={ LabelAndInput } type='number'
                                    label='Ano' cols='12 4' placeholder='Informe o ano'
                                    readOnly={ readOnly }/>

                              <ItemList cols='12 6' list={ credits } readOnly={ readOnly }
                                    field='credits' legend='Créditos' />
                              <ItemList cols='12 6' list={ debts } readOnly={ readOnly }
                                    field='debts' legend='Débitos' showStatus={ true } />
                        </div>
                        <div className='box-footer'>
                              <button type='submit' className={`btn btn-${ this.props.submitClass }`}>
                                    { this.props.submitLabel }
                              </button>
                              <button type='button' className='btn btn-default'
                                    onClick={ this.props.init }>Cancelar</button>
                        </div>
                  </form>
            )

      }
}

const idDoForm = 'billingCycleForm'

//Para fazer com que seu componente de formulário se comunique com o 'store', 
//precisamos envolvê-lo com reduxForm (). 
//Ele fornecerá os adereços sobre o estado e a 
//função do formulário para manipular o processo de envio.
// em { form: ID_DO_FORM } 
//Decorando BillingCycle com reduxForm 
BillingCycleForm = reduxForm({ form: idDoForm, destroyOnUnmount: false })(BillingCycleForm)

const selector = formValueSelector(idDoForm)

const mapStateToProps = state => ( { 
      credits: selector( state, 'credits' ),
      debts: selector( state, 'debts' ) 
} )
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)