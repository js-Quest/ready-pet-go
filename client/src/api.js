import axios from 'axios';
//graphQL mutations and queries
const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000 //how long we wait for response
});

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

export {login, register}