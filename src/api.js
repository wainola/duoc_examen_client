import axios from 'axios'

const { REACT_APP_API_URL } = process.env

class API {
  static login({ credentials }){
    console.log('credentials', credentials)
  }
}

export default API