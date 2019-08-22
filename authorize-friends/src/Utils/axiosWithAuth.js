import axios from 'axios'

const axiosWithAuth = ( ) => {
  
    return axios.create({
        hearders: {
            authorization: localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth