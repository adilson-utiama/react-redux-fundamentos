//Aqui a função é a 'Action Creator', 
//e o que ela retorna, que é o objeto, é a 'Action'. 
//Ao ser disparada, ela comunicará ao Reducer que o type é 'VALUE_CHANGED', 
//além do valor payload: value que deverá ser atualizado na Store
//
//propriedade 'type' e obrigatorio, ja no 'payload' opcional, pode ser outro nome
export function changeValue(e) {
      console.log('changeValue')
      return {
            type: 'VALUE_CHANGED',
            payload: e.target.value
      }
}