/* Padrao CommonJS */
// PARA IMPORTAR
// const logger = require('./logger')
// PARA EXPORTAR
// module.export = { OBJETO } 

/* Padrao ES2015 + */
// PARA IMPORTAR
import {info} from './logger';
import Pessoa from './pessoa';

// PARA EXPORTAR
// export class Pessoa{  conteudo... }

info('Usando o Padrao do CommonsJS!');

const pessoa = new Pessoa('Wilson');
console.log(pessoa.toString());