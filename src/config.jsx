import axios from 'axios';

/**
 * CORS 문제 해결을 위해 https://cors-anywhere.herokuapp.com/를 사용한다.
 */
const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://www.aladdin.co.kr';
// const BASE_URL = '/sr_novel/data/';
// const BASE_URL = '/api';

export const API = {
  DATA: `${BASE_URL}/data`,
};

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
