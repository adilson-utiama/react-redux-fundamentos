import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
      counter: counterReducer
})

//Em 'Provider' criando a Store
ReactDOM.render(
      <Provider store={ createStore(reducers) }>
            <Counter />
      </Provider>,
      document.getElementById('app')
);

//NOTAS
//[Store]: é o container que armazena e centraliza o estado geral da aplicação. 
//Ela é imutável, ou seja, nunca se altera, apenas evolui.
//
//[Actions]: são fontes de informações que são enviadas da aplicação para a Store. 
//São disparadas pelas Action Creators, que são simples funções que, 
//ao serem executadas, ativam os Reducers.
//
//[Reducers]: recebem e tratam as informações para que sejam ou não enviadas à Store.
//
//[Conexão dos componentes ao Redux]: para poderem se inscrever à evolução de estados da Store 
//ou disparar eventos para evoluí-la.

//Sobre REDUCER
//Caso sua aplicação possua vários reducers, 
//você pode combiná-los para enviá-los à Store da seguinte forma, usando o método combineReducers:
//
//export const Reducers = combineReducers({
//      clickState: clickReducer,
//      otherState: otherReducer
//    });