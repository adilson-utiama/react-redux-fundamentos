import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import Saudacao from './componentes/Saudacao'

//Podemos importar usando o destructuring do ES
//import { Boatarde, BoaNoite } from './componentes/MultiplosComponentes

//Em Multi estamos importando o componente 'default', 
//podemos colocar qualquer nome para a referencia, no caso de 
//um componente exportado como 'default'
import Multi, { BoaNoite } from './componentes/MultiplosComponentes'

ReactDOM.render(
      <Fragment>
            <Primeiro />
            <Saudacao nome="Adilson" />

            <Multi.BoaTarde nome="Wilson" />
            <BoaNoite nome="Maria" />
      </Fragment>,
      document.getElementById('root')
)