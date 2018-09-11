import axios from 'axios'

const { REACT_APP_API_URL } = process.env

class API {
  static login({ credentials }){
    return axios.post(`${REACT_APP_API_URL}/api/login`)
  }

  static getCredits(){
    return axios.get(`${REACT_APP_API_URL}/api/getAll`)
      .then(response => response)
      .catch(response => response)
    }

    static postUser(body){
      return axios.post(`${REACT_APP_API_URL}/api/user`, body)
    }
}

export default API