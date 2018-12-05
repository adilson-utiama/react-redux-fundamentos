import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
      
      constructor(props) {
            super(props)
            this.keyHandler = this.keyHandler.bind(this)
      }

      keyHandler(e) {

            //Destructure
            //A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript
            // que possibilita extrair dados de arrays ou objetos em variáveis distintas.
            const { add, search, description, clear } = this.props

            if (e.key === 'Enter') {
                  e.shiftKey ? search() : add(description)
            } else if (e.key === 'Escape') {
                  clear()
            }
      }

      //Invocado antes de montar o componente
      //React life cicle 
      //depreciado a partir da versao 16.3
      componentWillMount() {
            this.props.search()
      }

      render() {

            //Destructure
            const { add, search, description } = this.props

            return (

                  <div role='form' className='todoForm'>
                        <Grid cols='12 9 10'>
                              <input id='description' className='form-control'
                                    placeholder='Adicione uma Tarefa'
                                    onChange={ this.props.changeDescription }
                                    onKeyUp={ this.keyHandler }
                                    value={ this.props.description }></input>
                        </Grid>
            
                        <Grid cols='12 3 2'> 
                              <IconButton style='primary' icon='plus'
                                    onClick={ () => add(description) } ></IconButton>
                              <IconButton style='info' icon='search'
                                    onClick={ search }></IconButton>
                              <IconButton style='default' icon='close'
                                    onClick={ this.props.clear }></IconButton>
                        </Grid>
                  </div>
            
            )
      }
}

const mapStateToProps = state => ( { description: state.todo.description } )
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)