import axios from 'axios'

export default axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    'Content-Type': 'application/json',
  },
})
