import React, { Component } from 'react'

export default class ComponenteClasse extends Component {

      state = {
            tipo: this.props.tipo,
            nome: this.props.nome
      }

      constructor(props) {
            super(props)
            //Opcao de fazer 'bind' do this
            this.setNome = this.setNome.bind(this)
      }

      setTipo(event) {
            this.setState( { tipo: event.target.value } )
      }

      setNome(event) {
            //Esta funcao pode ser evocada sem utilizar Arrow Function
            //pois o 'this' corresponde a esta classe
            this.setState( { nome: event.target.value } )
      }

      render() {

            const { tipo, nome } = this.state

            return (
                  <div>
                        <h1>{ tipo } { nome }</h1>
                        <input type="text" onChange={ event => this.setTipo(event) } value={ tipo } />
                        <input type="text" onChange={ this.setNome } value={ nome } />
                  </div>
            )
      }
}