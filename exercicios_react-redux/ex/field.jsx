import React, { Component } from 'react'

// Exemplo de Componente controlado pelo proprio componente e nao pelo DOM
// Estado 'controlled', o componente tem total controle do input neste exemplo
//  nao permite que o elemento seja controlado pelo DOM
// Para deixar o estado como 'uncontrolled', passamos { value: 'undefined' }
// e tiramos o 'onChange={}' do input
class Field extends Component {
      constructor(props) {
            super(props)
            this.state = { value: props.initialValue }
            this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
            this.setState( { value: event.target.value } )
      }

      render() {
            return (
                  <div>
                        <label>{ this.state.value }</label><br />
                        <input onChange={this.handleChange} value={ this.state.value }/>
                  </div>
            )
      }
}

export default Field