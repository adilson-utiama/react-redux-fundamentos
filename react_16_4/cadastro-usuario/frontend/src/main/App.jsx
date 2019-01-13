import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import { HashRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props => 
      <HashRouter> 
            { /* renderizacao da rota -> EX: http://localhost:3000/#/users */ }
            <div className="app">
                  <Logo  />
                  <Nav />
                  <Routes /> 
                  <Footer />
            </div>
      </HashRouter>

      /** Opcao usando BrowserRouter
      
            import { BrowserRouter } from 'react-router-dom'
      
            //

            <BrowserRouter> -> uses the HTML5 history API -> htt://localhost:3000/users (sem #)
                  ...
                  <Routes />
                  .... 
            </BrowserRouter>
      
      
      */


