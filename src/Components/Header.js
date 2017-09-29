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
            {/* <div className='just-logo'>
            <img className='dgp' src={require('../pictures/DG.png')}  />
            </div>
            <div className='just-links'>
            <Link className='link' to="/"> Projects </Link>
            <Link className='link' to="/contact"> Contact </Link>
            <Link className='link' to="/about"> About </Link>
            <a href="a-resume"> Resume </a>
            </div> */}
          </div>

      </div>
    )
  }
};
