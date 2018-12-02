import React, { Component } from 'react'
import PageHeader from '../template/pageHeadder'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

      constructor(props) {
            super(props)
            //Amarrando o this a funcao handleAdd
            this.handleAdd = this.handleAdd.bind(this)
      }

      handleAdd() {
            //O this faz esta associado ao Todo
            console.log(this)
      }

      render() {
            return (
                  <div>
                        <PageHeader name='Tarefas' small='Cadastro' />
                        <TodoForm handleAdd={ this.handleAdd } />
                        <TodoList />
                  </div>
            )
      }
}