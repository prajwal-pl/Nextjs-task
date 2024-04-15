import axios from 'axios'
import { baseUrl } from '../components/constant'

console.log(baseUrl);

const axiosInstance = axios.create({
    
});

axiosInstance.defaults.baseURL = baseUrl;

  
export const contactDetails = (data) => {
    return axiosInstance.post('/uni-contact', data, {
        
    });
}

