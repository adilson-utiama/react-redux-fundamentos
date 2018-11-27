import React, { Component } from 'react'

export default class ClassComponentState extends Component {

      //No Construtor, precisamos invocar o super() obrigatoriamente
      constructor(props) {
            super(props)
            //this.state = propriedade herdada de Compponent, nao pode ser alterada diretamente
            //No react, nao podemos alterar propriedades diretamente, apenas evolui-la
            //predominacao de programacao funcional
            this.state = { value: props.initialValue }
      }

      sum(delta) {
            //podemos alterar o this.state usando this.setState()
            this.setState( { value: this.state.value + delta } )
      }

      render() {
            //No onclick, neste caso usamos arrow functions
            //se  passarmos a funcao sum() diretamente, ficara como UNDEFINED 
            return (
                  <div>
                        <h1>{ this.props.label }</h1>
                        <h2>{ this.state.value }</h2>
                        <button onClick={ () => this.sum(-1) } >Decrement</button>
                        <button onClick={ () => this.sum(1) } >Increment</button>    
                  </div>
            )
      }
}