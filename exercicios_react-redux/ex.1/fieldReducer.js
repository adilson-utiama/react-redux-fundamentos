const INITIAL_STATE = { value: 'Valor Inicial' }

//Este será o nosso Reducer que será acionado pela Action
// caso o type dela seja 'VALUE_CHANGED', 
//caso contrário manterá o estado atual.
export default function(state = INITIAL_STATE, action) {
      switch(action.type) {
            case 'VALUE_CHANGED':
                  return { value: action.payload }
            default: 
                  return state
      }
}