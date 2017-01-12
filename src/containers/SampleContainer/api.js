import axios from 'axios';

const API = {

  async fetchData () {
    return await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  }

};

export default API;
