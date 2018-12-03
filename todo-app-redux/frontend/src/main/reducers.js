import { combineReducers } from 'redux'

const rootReducer = combineReducers({
      todo: () => ({
            description: 'Ler Livro',
            list: [{
                  _id: 1,
                  description: 'Pagar fatura do cartao',
                  done: true
            }, 
            {
                  _id: 2,
                  description: 'Reuniao com equipe as 10:00',
                  done: false
            },
            {
                  _id: 3,
                  description: 'Consulta medica na terca depois do almoco',
                  done: false
            }]
      })
})