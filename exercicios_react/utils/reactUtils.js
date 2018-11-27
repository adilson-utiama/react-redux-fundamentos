import React from 'react';

// React.cloneElement( ELEMENTO, PROPRIEDADE ), clona componente e passa propriedade 
//  Neste caso, so funciona se passar apenas um elemento
// { ...props } = usando spread operator, clonando props
//
// React.Children.map(elemento, expressao lambda) = semelhante a funcao map
// Nesta solucao, podemos passar varios elementos para o componente
// propagando as propriedades para os filhos atraves do map

function childrenWithProps(children, props) {
      return React.Children.map(props.children,
            child => React.cloneElement(child, { ...props }))
}

export { childrenWithProps } 