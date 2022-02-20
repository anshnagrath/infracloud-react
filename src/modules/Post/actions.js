export const POST_MODULE_INIT = 'POST_MODULE_INIT';
export const POST_MODULE_INIT_SUCCESS='POST_MODULE_INIT_SUCCESS';
export const POST_PAGE_CHANGE='POST_PAGE_CHANGE';
export const POST_FETCH_ERROR='POST_FETCH_ERROR';

export function postModuleInit() {
    return {
        type : POST_MODULE_INIT
        
    };
}


export function postModulePageChange(action) {
    return {
        type : POST_PAGE_CHANGE,
        pageNumber : action.pageNumber,
        limit : action.limit
        
    };
}


export function postModuleSuccess(action) {
 
    return {
        type : POST_MODULE_INIT_SUCCESS,
        post : action.data ,
        totalCount : action['Post_Count']
    };
}


export function postError(action) {
    return {
        type : POST_FETCH_ERROR,
        error : action.error        
    };
}