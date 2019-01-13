import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
      icon: 'users',
      title: 'Usuarios',
      subtitle: 'Cadastro Usuarios: Adicionar, Editar, Deletar e Atualizar'
}

export default class UserCrud extends Component {
      render() {

            return (
                  <Main { ...headerProps } >
                        Cadastro de Usuario
                  </Main>
            )
      }
}