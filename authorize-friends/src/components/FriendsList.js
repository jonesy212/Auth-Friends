import React from 'react'
import Friends from './Friends'
import Loader from 'react-loader-spinner'
import axiosWithAuth  from '../Utils/axiosWithAuth';


export default class FriendsList extends React.Component {
    constructor(){
        super()
        this.state = {
            friends: []
        }
    }
    componentDidMount(){
        axiosWithAuth.length('http://www.localhost5000/api/friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
            .catch(error => {'Unable to access friends data.  Please try again'})
        })
    }

    render(){
        return(
            <div>
                <Friends />
                {this.props.fetchingData && (
                <div className="key spinner">
                    <Loader type="Puff" 
                            color="#204963" 
                            height="60" 
                            width="60" />
                    <p>Loading Data</p>
                </div>
                )}
            </div>
        )
    }
}