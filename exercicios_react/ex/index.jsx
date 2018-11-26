import React from 'react';
import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './component';
import SilvaFamily from './silvaFamily';

ReactDOM.render(
      <div>
            <Primeiro />
            <Segundo />

            <div>
                  <h2>Uso de Componentes em outro Componente</h2>
                  <SilvaFamily />
            </div>
      </div>,
      document.getElementById('app')
);