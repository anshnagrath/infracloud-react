import axios, { Method } from 'axios';
import Auth from '../auth/Auth';
import axiosHandler from '../helpers/axiosHandler';


export default async function makeRequest(url, method, inputPayload = {}) {
  


    let requestConfig = {
        baseURL: `${process.env.REACT_APP_DEV_API_URL}`,
        url: url,
        method: method,
        headers: {
        
        },
        data: {}
    };

    // console.log(requestConfig)
    if (method !== 'get' && inputPayload) {
        requestConfig.data = inputPayload;
    }

    try {
        let response = await axios.request(requestConfig);
        return response;
    } catch (error) {
        console.log(error, 'error');;
    }
}
