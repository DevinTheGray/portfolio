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
      <div className='dev-logo'>
        <img className='logo' src={require('../pictures/dg-logo.png')} />




      </div>
    )
  }
};
