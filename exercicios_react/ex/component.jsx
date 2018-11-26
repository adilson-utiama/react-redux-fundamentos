import React from 'react';

//Utilizando arrow function
//quando ha apenas um parametro, podemos retirar os parenteses
export default props => (  //<- expressao resolvida dentro de parenteses, return implicito
      <h1>{ props.value }</h1> //acessando a propriedade value
)