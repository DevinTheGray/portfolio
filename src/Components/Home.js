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
            <div className='project'>
              <a href="http://graysanatomy.s3-website-us-west-2.amazonaws.com/"> <img className='picture' src={require('../pictures/graysanatomy-logo.png')} /> </a>
            </div>
            <div className='project'>
              <a href="http://mycro.herokuapp.com/"> <img className='picture' src={require('../pictures/mycro.png')} /> </a>
            </div>
            <div className='project'>
              <a href="https://q1-star-wars.firebaseapp.com/"> <img className='picture' src={require('../pictures/starwars.png')} /> </a>
            </div>
            <div className='project'>
              <a href="https://stackdapp.herokuapp.com/"> <img className='picture' src={require('../pictures/stackD.png')} /> </a>
            </div>

          </div>
        </div>

        <div className='full-resume'>
          <h1> Resume </h1>
          <img className='resume' src={require('../pictures/DevinGrayResume.jpg')} />
        </div>

        <div className='me'>
          <div className='extra'>
            <div className='git-hub'>
              <a href="https://github.com/Devingray13"><img className='gitit' src={require('../pictures/github.jpg')} /></a>
              <h2> DevinGray13 </h2>
            </div>

            <div className='git-hub'>
              <img className='git' src={require('../pictures/phone.png')} />
              <h2> 303-999-7370 </h2>
            </div>
          </div>
          <div className='extra-1'>
            <div className='git-hub'>
              <img className='git' src={require('../pictures/email-logo.png')} />
              <h2> devindevelops@gmail.com </h2>
            </div>
            <div className='git-hub'>
              <a href="https://www.linkedin.com/in/devingray13/"><img className='git' src={require('../pictures/linkedin.jpg')} /></a>
              <h2> devingray13 </h2>
            </div>


        </div>
      </div>



      </div>
    )
  }
};
