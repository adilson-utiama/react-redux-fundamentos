import React, { Component } from 'react';

export default class ClassComponent extends Component {

      //render() = Metodo obrigatorio ao extender Component
      //this.props = herdado de Component
      render() {
            return (
                  <h1>{ this.props.value }</h1>
            )
      }
}