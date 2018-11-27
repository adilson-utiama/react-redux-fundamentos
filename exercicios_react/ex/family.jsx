import React from 'react';

export default props => (
      //props.children, referente aos componente(s) filho(s) do componente
      //EX: <ComponentePai> 
      //        <ComponenteFilho />
      //        ......
      //    </ComponentePai>
      <div>
            {props.children} 
      </div>
)