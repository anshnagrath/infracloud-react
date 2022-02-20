export const COMENTS_MODULE_INIT = 'COMENTS_MODULE_INIT';
export const COMENTS_MODULE_INIT_SUCCESS='COMENTS_MODULE_INIT_SUCCESS';
export const COMENTS_PAGE_CHANGE='COMENTS_PAGE_CHANGE'

export function comentModuleInit( action ) {
    return {
        type : COMENTS_MODULE_INIT,
        id : action.id
        
    };
}


export function comentModulePageChange(action) {
    return {
        type : COMENTS_PAGE_CHANGE,
        pageNumber : action.pageNumber,
        id : action.id
        
    };
}


export function comentModuleSuccess(action) {
 
    return {
        type : COMENTS_MODULE_INIT_SUCCESS,
        comments : action.data ,
        commentCount  : action['Coment_Count'],
        id : action.id
    };
}
