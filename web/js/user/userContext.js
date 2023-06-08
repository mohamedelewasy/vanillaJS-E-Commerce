export const userContext = {token:undefined, email:undefined}

export const isLogged = ()=>{
  if(userContext.token !== undefined) true;
  const token = sessionStorage.getItem("token");
  const email = sessionStorage.getItem("email");
  if(token){
    userContext.token = token;
    userContext.email = email;
    return true;
  }
  return false;
}

export const signin = (token, email)=>{
  userContext.token = token;
  userContext.email = email
  sessionStorage.setItem('token', token)
  sessionStorage.setItem('email', email)
}