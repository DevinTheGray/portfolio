import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



import Header from './Components/Header'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'






ReactDOM.render(
<Router>
  <div>
    <Route path='/' component={App} />
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' component={About} />

  </div>

</Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
