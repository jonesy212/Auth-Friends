import React from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom'

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

const ProtectRoute = Component => props => {
  if (localStorage.getItem('token')) {
    return <Component {...props} />;
  } else{
    return <Redirect to ='/login'/>
  }
}
const ProtectedFriends = ProtectRoute(Friends)
function App() {
  return (
   
      <div className='App'>
        <Route path= '/login' 
        Component={Login} />
        <PrivateRoute path= '/friends'
        Component={Friends} />
        {/* <Route path='/friends' component={ProtectedFriends}/> */}
      </div>
  );
}

export default App;
