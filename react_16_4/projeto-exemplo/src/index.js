import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import Saudacao from './componentes/Saudacao'

ReactDOM.render(
      <Fragment>
            <Primeiro />
            <Saudacao nome="Adilson" />
      </Fragment>,
      document.getElementById('root')
)