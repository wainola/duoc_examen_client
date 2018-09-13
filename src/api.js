import axios from 'axios'

const { REACT_APP_API_URL } = process.env

class API {
  static login(body){
    return axios.post(`${REACT_APP_API_URL}/api/login`, body)
  }

  static getCredits(){
    return axios.get(`${REACT_APP_API_URL}/api/getAll`)
      .then(response => response)
      .catch(response => response)
    }

    static postUser(body){
      return axios.post(`${REACT_APP_API_URL}/api/signup`, body)
    }

    static postCreditRequest(body){
      return axios.post(`${REACT_APP_API_URL}/api/user/create-request`, body)
    }
    
    static loginExecutive(body){
      return axios.post(`${REACT_APP_API_URL}/api/login-executive`, body)
    }
}

export default API