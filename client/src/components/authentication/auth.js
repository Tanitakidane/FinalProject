import jwt_decode from "jwt-decode";


class Auth
{

constructor()
{
    this.authenticated=false;
}




isAuthenticated()
{

let token=localStorage.getItem("token");

if(!token)
{

    return false;
}
else{

    let decoded = jwt_decode(token);


    if (Date.now() >= decoded.exp * 1000) {
        return false;
      }

      return true;
}


}
}

export default new Auth();