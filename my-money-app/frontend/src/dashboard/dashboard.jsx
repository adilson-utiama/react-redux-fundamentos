import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class DashBoard extends Component {

      render() {
            return (
                  <div>
                        <ContentHeader title='DashBoard' small='Versão 1.0' />
                        <Content>
                              DashBoard
                        </Content>
                  </div>
            )
      }
}

export default DashBoard