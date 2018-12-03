import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
     
      // Em vez do 'state', usamos as 'props'
      //
      // constructor(props) {
      //       super(props)
      //       this.state = { value: props.initialValue }
      //       this.handleChange = this.handleChange.bind(this)
      // }

      // handleChange(event) {
      //       this.setState( { value: event.target.value } )
      // }

      render() {
            return (
                  <div>
                        <label>{ this.props.value }</label><br />
                        <input onChange={this.props.changeValue} value={ this.props.value }/>
                  </div>
            )
      }
}

//Mapea o 'state' para 'props'
function mapStateToProps(state) {
      return {
            value: state.field.value
      }
}

//Criamos o método mapDispatchToProps para converter a Action Creator 'changeValue'
//que criamos no arquivo 'fieldActions.js' em uma prop para o componente. 
//O método 'bindActionCreators' facilita este trabalho. 
//o valor do state 'value' que foi alterado pelo input text é enviado à Store 
//pelo método changeValue, que foi mapeado no componente como prop.
//Por fim, passamos o método mapDispatchToProps como segundo parâmetro do método connect.
function mapDispatchToProps(dispatch) {
      return bindActionCreators( { changeValue }, dispatch )
}

// export default Field

//A partir do metodo connect, este componente estara conectado ao Store
export default connect(mapStateToProps, mapDispatchToProps)(Field)  //