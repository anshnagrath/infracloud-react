export const API_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
}

export const API_URLS = {
    baseurl: process.env.REACT_APP_DEV_API_URL,
    post: {
        getAllPost: 'posts',


    },
    comment :{
        getAllComments: 'comments',
    }
   
    
}