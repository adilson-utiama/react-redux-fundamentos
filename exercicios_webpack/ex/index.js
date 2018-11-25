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


//TESTE EXEMPLO usando Spread Operator do ES2015

const produto = {
      nome: 'Caneta Bic Azul',
      preco: 1.90
}

function clone(objeto) {
      //Com o plugin 'transform-object-rest-spread' do babel, podemos utilizar o Spread Operator
      return { ...objeto }; // Gerando uma copia do objeto com todos os seus atributos com Spread Operator
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Preta';

console.log(novoProduto, produto);