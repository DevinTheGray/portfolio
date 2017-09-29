import React, { Component } from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Contact extends Component {
  render(){
    return(
      <div className='contact'>
        <div className='extra'>
          <div className='git-hub'>
            <a href="https://github.com/Devingray13"><img className='gitit' src={require('../pictures/github.jpg')} /></a>
            <h2> DevinGray13 </h2>
          </div>
        </div>
        <div className='extra-3'>

          <div className='git-hub'>
            <img className='git' src={require('../pictures/phone.png')} />
            <h2> 303-999-7370 </h2>
          </div>
        </div>
        <div className='extra-1'>
          <div className='git-hub'>
            <a href="https://www.linkedin.com/in/devingray13/"><img className='git' src={require('../pictures/linkedin.jpg')} /></a>
            <h2> devingray13 </h2>
          </div>
        </div>
        <div className='extra-2'>
          <div className='git-hub'>
            <img className='git' src={require('../pictures/email-logo.png')} />
            <h2> devindevelops@gmail.com </h2>
          </div>
      </div>


      </div>
    )
  }
};
