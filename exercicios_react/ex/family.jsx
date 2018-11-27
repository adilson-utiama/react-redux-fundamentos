import React from 'react';

export default props => (
      //props.children, referente aos componente(s) filho(s) do componente
      //EX: <ComponentePai> 
      //        <ComponenteFilho />
      //        ......
      //    </ComponentePai>
      // 
      // React.cloneElement( ELEMENTO, PROPRIEDADE ), clona componente e passa propriedade 
      //  Neste caso, so funciona se passar apenas um elemento
      // { ...props } = usando spread operator, clonando props
      <div>
            <h2>Familia</h2>
            { props.children }
            { React.cloneElement(props.children, { ...props} ) } 
      </div>
)