import React from 'react'

//Podemos exportar individualmente
export const BoaTarde = props => <h1>Boa Tarde { props.nome } !</h1>

export const BoaNoite = props => <h1>Boa Noite { props.nome } !</h1>

//Ou de forma conjunta
export default { BoaTarde, BoaNoite }