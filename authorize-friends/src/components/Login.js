import React from 'react'
import axios from 'axios'


//create a login form 
class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        
        event.preventDefault();
        axios.post('http://www.localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                this.history.push('./friends');
            })
            .catch(error => {
                console.log('Please re-enter password and username')
            });
      
    }

    render() {
        return(
            
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Login</button>
                    {/* {touched.password && errors.password && (
                        <p className = 'error'>{errors.password}</p>
                    )} */}
                    
                </form>
            </div>
        )
    }
}
    
export default Login