import React from 'react'

//NO HTML sera renderizado dentro de uma tag <div>, os componentes
export default props => (
      <div>
            <h1>Bom Dia { props.nome }</h1>
            <h2>Até Breve</h2>
      </div>
)

/* Nesta opcao, nao sera Renderizado dentro de uma tag <div> ou outra tag encapsuladora 
Ira manter estrutura individual das tags */
// export default props => 
//       <React.Fragment>
//             <h1>Bom Dia { props.nome }</h1>             
//             <h2>Até Breve</h2>
//       </React.Fragment>

/* Outra Opcao para renderizar 2 ou mais componentes
sem ter que envolver em uma tag <div>
podemos passar como uma 'array'
NECESSARIO ter uma propiedade 'key' com uma chave unica */
// export default props => [
//       <h1 key="chave1">Bom Dia { props.nome }</h1>,
//       <h2 key="chave2">Até Breve</h2>
// ]