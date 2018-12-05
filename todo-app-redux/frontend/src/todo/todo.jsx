import React from 'react'

import PageHeader from '../template/pageHeadder'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
      <div>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm />
            <TodoList />
      </div>
)
