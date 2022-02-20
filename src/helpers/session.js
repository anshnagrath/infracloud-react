

export function addToSession(key , value){
  return  sessionStorage.setItem(key, value)
}


export function getFromSession(key){
    return sessionStorage.getItem(key);
}