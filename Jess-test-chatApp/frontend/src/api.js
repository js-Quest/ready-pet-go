import axios from 'axios';
import { logout } from './shared/utils/auth'
// import { config } from 'process';
//graphQL mutations and queries
const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000 //how long we wait for response
});


// public routes
const login = async (data) => {
  try{ 
    return await apiClient.post('/auth/login', data)
  }catch(exception){
    return{
      error: true,
      exception,
    }
  }
};

apiClient.interceptors.request.use((config)=> {
  const userDetails = localStorage.getItem('user');

  if(userDetails) {
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, (err) => {
  return Promise.reject(err)
})

const register = async(data) => {
  try{
    return await apiClient.post('auth/register', data);
  }catch(exception){
    return {
      error: true,
      exception,
    }
  }
};

//secure routes
const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode ===403) && logout();
  };
};


export {login, register}