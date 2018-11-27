import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponent';
import ClassComponentState from './classComponentState'

ReactDOM.render(
      <div>
            <ClassComponent value="Componente de Classe" />

            <h2>Componente mantendo estado</h2>
            <ClassComponentState label="Contador" initialValue={ 10 } />
      </div>,
      document.getElementById('app')
);