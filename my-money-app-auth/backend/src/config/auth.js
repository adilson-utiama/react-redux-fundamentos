//Esse middleware sera responsavel por validar o token jwt para as rotas
//protegidas e garantir que a API esteja protegida

const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = ( req, res, next ) => {
      //CORS preflight request
      if( req.method === 'OPTIONS') {
            next() //da continuidade para requisicao
      } else {
            //Pega o token no body ou no header ou query da requisicao
            const token = req.body.token || req.query.token || req.headers['Authorization']

            if( !token ) {
                  return res.status(403).send( { errors: ['No token provided'] } )
            }

            //Verifica se o token é valido
            jwt.verify( token, env.authSecret, function( err, decoded ) {
                  if(err) {
                        return res.status(403).send( { errors: ['Failed to authenticate token'] } )
                  } else {
                        //req.decoded = decoded
                        next()
                  }
            } )
      }

      
}