import axios from 'axios'

const { REACT_APP_API_URL } = process.env

class API {
  static login({ credentials }){
    console.log('credentials', credentials)
  }

  static getCredits(){
    return axios.get(`${REACT_APP_API_URL}/api/getAll`)
      .then(response => response)
      .catch(response => response)
    }
}

export default API