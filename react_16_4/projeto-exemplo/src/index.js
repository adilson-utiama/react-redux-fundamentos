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

import ComponenteClasse from './componentes/ComponenteClasse'

import ComponentePai from './componentes/ComponentePai'
import ComponenteFilho from './componentes/ComponenteFilho'

ReactDOM.render(
      <Fragment>
            <ComponentePai nome="Paulo" sobrenome="Silva">
                  <ComponenteFilho nome="Pedro" />
                  <ComponenteFilho nome="Jose" />
                  <ComponenteFilho nome="Carla" />
            </ComponentePai>

            <ComponenteClasse tipo="Bom Dia" nome="Wilson" />

            <Primeiro />
            <Saudacao nome="Adilson" />

            <Multi.BoaTarde nome="Wilson" />
            <BoaNoite nome="Maria" />
      </Fragment>,
      document.getElementById('root')
)