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






ReactDOM.render(
<Router>
  <div>
    <Route path='/' component={App} />
    <Route path='/' component={Home} />

  </div>

</Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
