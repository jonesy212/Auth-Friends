import React from 'react'
import {Route, Redirect} from 'react-router-dom';

//requirements for a PrivateRoute:
    //1. Must have the same API as '<Route />' = Must have the same Props
    

    //you can follow an established patter when wrapping a private 
    //route on every project and will work in all cases


    //const PrivateRoute = ({component: Component ... rest}) => {
    //return <Route{...rest} render={props => <Component {...porps} />} />
    //};

//create a rest is a shadow object with a spread operator
const PrivateRoute = ({component: Component, ...rest}) => {

    return(
        <Route 
        {...rest} 
        render= { props => () =>  {
            if(localStorage.GetItem('token')){
                return <Component {...props}/>
            }
            return <Redirect to ='login'/>
        }}  />   
)}

export default PrivateRoute