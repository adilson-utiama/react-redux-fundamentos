import React, { Component } from 'react'

export default class ComponenteClasse extends Component {

      state = {
            tipo: this.props.tipo,
            nome: this.props.nome
      }

      //E invocado imediatamente após um componente ser montado.
      //Se você precisar carregar dados de um endpoint remoto, 
      //este é um bom local para instanciar a solicitação de rede.
      componentDidMount() {
            console.log('componentDidMount invocado!')
      }

      //E invocado imediatamente antes de um componente ser desmontado e destruído. 
      //Execute qualquer limpeza necessária nesse método, 
      //como invalidar cronômetros, cancelar solicitações de rede
      // ou limpar quaisquer assinaturas criadas em componentDidMount()
      componentWillMount() {
            console.log('componentWillMount invocado!')
      }

      //Use shouldComponentUpdate () para permitir que o React saiba 
      //se a saída de um componente não é afetada pela alteração atual no estado ou props. 
      //O comportamento padrão é renderizar novamente em cada alteração de estado e, 
      //na grande maioria dos casos, você deve confiar no comportamento padrão.
      shouldComponentUpdate(nextProps, nextState) {
            console.log(`shouldComponentUpdate() invocado - ${nextProps.nome} : ${nextState.nome}`)
            return true
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