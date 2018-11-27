import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';
import family from './family';

ReactDOM.render(
      //Componentes (filho) dentro do Componente, como no html
      <div>
            <Family lastName="Silva">
                  <Member name="Guilherme" />
                  <Member name="Joao" />
                  <Member name="Julia" />
            </Family>
      </div>,
      document.getElementById('app')
);