import Pessoa from './pessoa'

//O webpack ira carregar todas as dependencias deste modulo
//carregando o modulo B
import moduloA from '../modulos/moduloA'

import './assets' //ira procurar por index.js, onde importara os .css e .scss

const atendente = new Pessoa()
console.log(atendente.cumprimentar())