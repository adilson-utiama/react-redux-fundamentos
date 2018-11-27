import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';
import family from './family';

ReactDOM.render(
      //Componentes (filho) dentro do Componente, como no html
      <div>
            <Family>
                  <Member name="Guilherme" lastName="Silva" />
                  <Member name="Joao" lastName="Silva" />
            </Family>
      </div>,
      document.getElementById('app')
);