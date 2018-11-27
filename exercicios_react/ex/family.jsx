import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
      //props.children, referente aos componente(s) filho(s) do componente
      //EX: <ComponentePai> 
      //        <ComponenteFilho />
      //        ......
      //    </ComponentePai>
      // 

      <div>
            <h2>Familia</h2>
            { childrenWithProps(props.children, props) }
      </div>
)