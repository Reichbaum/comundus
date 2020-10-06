import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://eisenbahn/wp-json/wp/v2/'
})