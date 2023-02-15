import axios from 'axios';
// DEV
// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://sdr-beta-api.onrender.com'

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});