import React from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'

class Friends extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                friends: [],
                id: '',
                name: '',
                age: '',
                email: '',
            }
        }
        // componentDidMount(){
        //     axiosWithAuth()
        //     .get('http://www.localhost5000/api/friends')
        //     .then(res => {
        //         this.setState({
        //             friends: res.data
        //         })
        //         .catch(error => {'Unable to access friends data.  Please try again'})
        //     })
        // }

        
    
        updateHandler = event =>{
            event.preventDefault();
            axiosWithAuth()
            .put('http://localhost:5000/api/friends/:id')
            .then(res => { 
                localStorage.setItem('token', res.data.payload)
            })
            .catch(error => {
                console.log('Did Not Update.  Please Resubmit Information')
            })
        }
        render(){
            
            return(
                <div>
                    <h2>{this.props.id}</h2>
                    <h2>{this.props.name}</h2>
                    <h2>{this.props.age}</h2>
                    <h2>{this.props.email}</h2>
                    <ul>
                        <button onChange={this.updateHandler}>List Friends
                        </button>
                    </ul>
                </div>
            )
        }
    }

export default Friends