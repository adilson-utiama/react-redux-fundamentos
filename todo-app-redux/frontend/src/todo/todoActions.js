import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
      type: 'DESCRIPTION_CHANGED',
      payload: event.target.value
})

export const search = () => {
      //Aqui retorna uma Promise, que sera resolvida por um Middleware
      //onde a resposta 'data' ficara disponivel para o reducer
      const request = axios.get(`${URL}?sort=-createdAt`)
      return {
            type: 'TODO_SEARCHED',
            payload: request
      }
}

/* export const add = (description => {
      const request = axios.post(URL, { description: description })

      //Aqui o middleware 'multi' dispara 2 actions a partir deste
      // sendo possivel siparar varias actions
      // colocamos em uma array []

      return [
            { type: 'TODO_ADDED', payload: request },
            search()
      ]
}) */

//NOTA
//O middleware Redux Thunk permite que você escreva 'Actions Creators' 
//que retornam uma função ao invés de uma ação. 
//A conversão pode ser usada para atrasar o envio de uma ação ou 
//para despachar somente se uma determinada condição for atendida. 
//A função interna recebe os métodos de armazenamento 'dispatch' e 'getState' como parâmetros.
export const add = (description) => {
      return dispatch => {
            axios.post(URL, { description: description })
                  .then(resp => dispatch( clear() ))
                  .then(resp => dispatch( search() ))
      }
}

export const clear = () => {
      return { type: 'TODO_CLEAR' }
}


//Nestes metodos o 'type' é desnecessario, pois no 'search' ja carrega o novo estado
export const markAsDone = (todo) => {
      return dispatch => {
            axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
                  .then(resp => dispatch( search() ))
      }
}

export const markAsPending = (todo) => {
      return dispatch => {
            axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
                  .then(resp => dispatch( search() ))
      }
}

export const remove = (todo) => {
      return dispatch => {
            axios.delete(`${URL}/${todo._id}`)
                  .then(resp => dispatch( search() ))
      }
}