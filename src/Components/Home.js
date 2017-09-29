import React, { Component } from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Home extends Component {
  render(){
    return(
      <div className='home'>
        <div className='dev-logo'>
        <img className='logo' src={require('../pictures/dg-logo.png')}  />
        </div>
        <div className='dad-joke'>
          <h3> Why should you never by anything with velcro on it?
            It's a total rip off. </h3>
        </div>

        <div className='projects'>
          <div className='intro'>
          <h1> Projects </h1>
          </div>
          <div className='project-box'>
            <div className='grays-anatomy'>
              {/* <img className='logo' src={require('../pictures/graysanatomy-logo.png')}  /> */}
              <a href="http://graysanatomy.s3-website-us-west-2.amazonaws.com/"> <img src={require('../pictures/graysanatomy-logo.png')} /> </a>

            </div>

          </div>
        </div>



      </div>
    )
  }
};
