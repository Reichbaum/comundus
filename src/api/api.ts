import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://www.bahn-erlebnisreise.de/wp-json/wp/v2/'
  // baseURL: 'http://eisenbahn/wp-json/wp/v2/'
})
