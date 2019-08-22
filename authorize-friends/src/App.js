import React from 'react';
import './App.css';
import { Link, Route, Redirect} from 'react-router-dom'

import FriendsList from './components/FriendsList'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

const ProtectRoute = Component  => props => {
   
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
        component={Login} />
        <ul>
          <Link to='/login'>Login</Link>
        </ul>
        <ul>
          <Link to='friends'>Friends</Link>
        </ul>
        
        <PrivateRoute path= '/protected'
        component={Login} />
        <PrivateRoute path= '/friends'
        component={Friends} />
        <PrivateRoute path= '/friendslist'
        component={FriendsList} />
        <FriendsList/>
        
        {/* <Route path='/friends' component={ProtectedFriends}/> */}
      </div>
  );
}

export default App;
