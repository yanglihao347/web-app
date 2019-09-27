import axios from 'axios';

export const reqLogin = user => axios.post('/login', user);