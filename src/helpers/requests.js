import axios from "axios";


export default async (method, url, qs = null, payload = null, headers = null) => {


    let requestData = {
        method: method,
        url: url,
      
    }

    if (payload) requestData.data = payload;
    if (headers) requestData.headers = { ...requestData.headers, ...headers }
    if (qs) requestData.params = qs

    return axios(requestData);
}

export function handleError(error) {
    // if axios error 
    if (error.response) {
        alert(error.response.data);
    }
}