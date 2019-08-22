import React from 'react'

import Loader from 'react-loader-spinner'
import axiosWithAuth  from '../Utils/axiosWithAuth';


export default class FriendsList extends React.Component {
        state = {
            friends: []
        }

    componentDidMount(){
        axiosWithAuth().get(`http://www.localhost5000/api/friends`)
        .then(res => {
            console.log(res);
            this.setState({
                friends: res.data })
            .catch(error => {'Unable to access friends data.  Please try again'})
        })
    }

    render(){
        return(

                <div>
                    {this.state.friends.map(friend => 
                    <div>
                        <h2>{this.friend.name}</h2>
                        <h2>{this.friend.age}</h2>
                        <h2>{this.friend.email}</h2>}
                    </div>
                        )} 
                </div>
            )
    }






/* {this.props.fetchingData && (
                // <div className="key spinner">
                //     <Loader type="Puff" 
                //             color="#204963" 
                //             height="60" 
                //             width="60" />
            
        
// <p>Loading Data</p> */}