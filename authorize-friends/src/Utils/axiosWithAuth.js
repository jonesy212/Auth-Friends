import axios from 'axios'

const axiosWithAuth = ( ) => {
    const token = localStorage.getItem('token')
    return axios.create({
        hearders: {
            Authorization: token
        }
    })
}

export default axiosWithAuth