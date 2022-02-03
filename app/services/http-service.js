// import Axios from 'axios'
import axios from 'axios'
import { Platform } from 'react-native'
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'
const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:5000/api/' : 'http://10.0.2.2:5000/api/'

// var axios = Axios.create({
//    withCredentials: true
// })

export const httpService = {
   get(endpoint, data) {
      return ajax(endpoint, 'GET', data)
   },
   post(endpoint, data) {
      return ajax(endpoint, 'POST', data)
   },
   put(endpoint, data) {
      return ajax(endpoint, 'PUT', data)
   },
   delete(endpoint, data) {
      return ajax(endpoint, 'DELETE', data)
   }
}

async function ajax(endpoint, method = 'GET', data = null) {
   try {
      const res = await axios({
         url: `${BASE_URL}${endpoint}`,
         method,
         data,
         params: method === 'GET' ? data : null
      })
      return res.data
   } catch (err) {
      console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
      console.dir(err)
      if (err.response && err.response.status === 401) {
         window.location.assign('/')
      }
      throw err
   }
}
