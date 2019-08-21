import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';
import Friends from './components/Friends'

function App() {
  return (
   
      <div className='App'>
        <Login />
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li> 
        </ul>
        <PrivateRoute exact path= '/protected' 
        component={FriendsList} />
        <PrivateRoute exact path= 'friends'
        component={Friends} />
      </div>
  );
}

export default App;
