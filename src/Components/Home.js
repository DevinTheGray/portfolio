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
        <h1 className='devin'> devin </h1> <h1 className='gray'> gray </h1>
      </div>


        <div className='projects'>
          <div className='intro'>
          <h1> projects </h1>
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

        {/* <div className='full-resume'>
          <h1> Resume </h1>
          <img className='resume' src={require('../pictures/DevinGrayResume.jpg')} />
        </div> */}

        <div className='full-resume'>
          <form>
            <input type="submit" id="submit" onclick="document.getElementById('hidden').style.display = 'block';" />
          </form>
          <img className='hidden' src={require('../pictures/DevinGrayResume.jpg')} />

        </div>


        <div className='links'>
          <a href='https://github.com/Devingray13'> <img className='cat' src={require('../pictures/murakamicat.png')} /> </a>
          <h2 className='email'> devindevelops@gmail.com </h2>
          <a href='https://www.linkedin.com/in/devingray13/'> <img className='go' src={require('../pictures/linkedin-1.png')} /> </a>
        </div>





      </div>
    )
  }
};
