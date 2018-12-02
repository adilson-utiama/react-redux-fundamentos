import React from 'react'
import Grid from '../template/grid'

export default props => (

      <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                  <input id='description' className='form-control'
                        placeholder='Adicione uma Tarefa'></input>
            </Grid>

            <div className='col-xs-12 col-sm-3 col-md-2'>
                  <button className='btn btn-primary'>
                        <i className='fa fa-plus'></i>
                  </button>
            </div>
      </div>

)