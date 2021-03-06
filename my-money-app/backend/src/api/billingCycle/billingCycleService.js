const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

//rotas de recursos geradas pelo node_restful 
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

//Rota ja automaticamente mapeada em 'routes.js'
//Retorna a quantidade de registros
BillingCycle.route('count', (req, res, next) => {
      BillingCycle.countDocuments(( error, value ) => {
            if (error) {
                  res.status(500).json({ errors: [error] })
            } else {
                  res.json( { value } )
            }
      })
})

//Rota para retornar sumario dos pagamentos
BillingCycle.route('summary', (req, res, next) => {
      BillingCycle.aggregate([
            { $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} }, 
            { $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} }, 
            { $project: {_id: 0, credit: 1, debt: 1} }
      ]).exec((error, result) => {
          if(error) {
              res.status(500).json({errors: [error]})
          } else {
              res.json(result[0] || { credit: 0, debt: 0 })
          }
      })
  })

module.exports = BillingCycle