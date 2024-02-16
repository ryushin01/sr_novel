import axios from 'axios';

/**
 * CORS 문제 해결을 위해 https://cors-anywhere.herokuapp.com/를 사용한다.
 */
const BASE_URL =
  // 'https://www.aladdin.co.kr';
  'https://cors-anywhere.herokuapp.com/https://www.aladdin.co.kr';
// const BASE_URL = '/sr_novel/data/';

export const API = {
  DATA: `/sr_novel/data`,
};

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
