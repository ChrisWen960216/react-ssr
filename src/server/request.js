import axios from 'axios';

function createInstance(request) {
  return axios.create(({
    baseURL: 'http://47.95.113.63/ssr',
    headers: {
      cookie: request.get('cookie') || null,
    },
  }));
}

export default createInstance;
