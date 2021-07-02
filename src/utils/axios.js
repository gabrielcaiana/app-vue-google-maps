import axios from 'axios'
import { API_URL } from '/public/config/config.json'

export default axios.create({
  baseURL: API_URL
})
