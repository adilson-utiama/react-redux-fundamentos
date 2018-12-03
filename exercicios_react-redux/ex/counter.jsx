import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement, stepChanged } from './counterActions'

const Counter = props => (
      <div>
            <h1>{ props.counter.number }</h1>
            <input onChange={ props.stepChanged }
                  value={ props.counter.step } type="number"/>
            <button onClick={ props.decrement }>Decrementa</button>
            <button onClick={ props.increment }>Incrementa</button>
      </div>
)  

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => 
            bindActionCreators({ increment, decrement, stepChanged }, dispatch)

//chamada dupla de funcao
//Primeiro: connect(mapStateToProps, mapDispatchToProps) 
//Segundo: retorno do Primeiro (funcao) e Counter como Argumento
//NOTA: Padrao Decorator     
export default connect(mapStateToProps, mapDispatchToProps)(Counter)