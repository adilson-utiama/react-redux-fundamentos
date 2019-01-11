import React from 'react'

function childWithProps(props) {
      /* Percorrendo cada elemento filho e passando as props do comoponente pai, 
      props.children (correspponde a um array)
      */
      return React.Children.map(props.children, child => {

            /* Clona props do pai e sobreescreve-as com suas propriedades em child.props */
            return React.cloneElement(child, {
                  /* Spread Operator */
                  ...props, ...child.props
            })
      })
}

export default props => (
      <div>
            <h1>{ props.nome } { props.sobrenome }</h1>
            <h2>Filhos</h2>
            <ul>
                  { childWithProps(props) }
            </ul>
      </div>
)