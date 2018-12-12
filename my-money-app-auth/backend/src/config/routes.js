const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

/**
 * //Definir URL base para todas as rotas
 * const router = express.Router()
 * server.use('/api', router)
 * 
 * //Rotas de Ciclo de PAgamento
 * const BillingCycle = require('../api/billingCycle/billingCycleService')
 * BillingCycle.register(router, '/billingCycles')
 */

 //ALem de cadastrar as novas rotas login, signup, validateToken, essas alteracoes
 //tem por objetivo separar as rotas publicas das rotas privadas (Acesso com autenticacao)
      
 /**
  * Rotas protegidas por token JWT
  */
 const protectedAPI = express.Router()
 server.use('/api', protectedAPI)

 //Passa pelo filtro de autenticacao
 protectedAPI.use(auth)
      
 const BillingCycle = require('../api/billingCycle/billingCycleService')
 BillingCycle.register(protectedAPI, '/billingCycles')
      
/**
 * Rotaspublicas
 */
const openAPI = express.Router()
server.use('/oapi', openAPI)

const AuthService = require('../api/user/authService')
openAPI.post('/login', AuthService.login)
openAPI.post('/signup', AuthService.sigup)
openAPI.post('/validateToken', AuthService.validateToken)
      
      
      
}