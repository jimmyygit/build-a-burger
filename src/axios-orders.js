import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-387cb-default-rtdb.firebaseio.com/',
})

export default instance