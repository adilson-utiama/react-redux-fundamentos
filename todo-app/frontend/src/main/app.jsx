//Alias 'modules' = 'node_modules' configurado em webpack.config.js
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

export default props => (
      <div className='container'>
            <h1>Testando Primeiro Componente</h1>
      </div>
)