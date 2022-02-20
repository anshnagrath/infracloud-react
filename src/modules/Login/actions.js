export const LOGIN_USER_NAME = 'LOGIN_USER_NAME';


export function loginUserName(action) {
    return {
        type : LOGIN_USER_NAME,
        name : action.name
    };
}
