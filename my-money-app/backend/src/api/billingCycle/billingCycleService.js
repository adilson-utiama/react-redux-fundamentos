const BillingCycle = require('./billingCycle')

//rotas de recursos geradas pelo node_restful 
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

//Rota ja automaticamente mapeada em 'routes.js'
//Retorna a quantidade de registros
BillingCycle.route('count', (req, res, next) => {
      BillingCycle.count(( error, value ) => {
            if (error) {
                  res.status(500).json({ errors: [error] })
            } else {
                  res.json( { value } )
            }
      })
})

module.exports = BillingCycle