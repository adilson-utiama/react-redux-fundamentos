const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).(6,20))/

const sendErrorsFromDB = ( res, dbErrors ) => {
      const errors = []
      _.forIn(dbErrors, error => errors.push(error.message))
      return res.status(400).json(errors)
}

const login = ( req, res, next ) => {
      //recebendo parametros da requisicao
      const email = req.body.email || ''
      const password = req.body.password || ''

      User.findOne( { email }, ( err, user ) => {
            if( err ) {
                  return sendErrorsFromDB(res, err)
            //verifica usuario e password usando o bcryot
            } else if( user && bcrypt.compareSync( password, user.password ) ) {
                  //gerando token
                  const token = jwt.sign(user, env.authSecret, { expires: '1 day' })
                  //extrai propriedades de 'user'
                  const { name, email } = user
                  //retorna usuario mais o token gerado
                  res.json( { name, email, token } )
            } else {
                  return res.status(400).send( { errors: ['Usuario/Senha Invalidos'] } )
            }
      } )
}

const validateToken = ( req, res, next ) => {
      //recebendo token pelo corpo da requisicao
      const token = req.body.token || ''
      //verifica se o token é valido
      jwt.verify(token, env.authSecret, function( err, decoded ) {
            return res.status(200).send( { valid: !err } )
      })
}