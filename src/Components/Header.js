import React, { Component } from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Header extends Component {
  render(){
    return(
      <div className='header'>

          <div className='nav-bar'>

            <img className='dgp' src={require('../pictures/dev1.png')}  />


          </div>

      </div>
    )
  }
};
