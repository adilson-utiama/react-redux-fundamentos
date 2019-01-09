import Pessoa from './pessoa'

//O webpack ira carregar todas as dependencias deste modulo
//carregando o modulo B
import moduloA from '../modulos/moduloA'

const atendente = new Pessoa()
console.log(atendente.cumprimentar())