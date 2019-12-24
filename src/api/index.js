import axios from 'axios';

export const reqLogin = user => axios.post('/login', user);
export const reqRegister = user => axios.post('/register', user);