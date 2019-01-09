import Pessoa from './pessoa'

//O webpack ira carregar todas as dependencias deste modulo
//carregando o modulo B
import moduloA from '../modulos/moduloA'

import './assets/css/estilo.css'

const atendente = new Pessoa()
console.log(atendente.cumprimentar())