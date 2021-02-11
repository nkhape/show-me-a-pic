import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID 1AF0CJt4CO0YnUUyS0IcjsFBTLQWLZFGkivYrTj7CaA'
      }
})
