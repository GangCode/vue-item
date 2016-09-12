const USER_KEY = "user";

var _user;

function isLogin() {
  return sessionStorage.getItem(USER_KEY) != null;
}

function login(username, password) {
  _user = {id:1, name:'admin'};
  sessionStorage.setItem(USER_KEY, _user);
  return new Promise(function(resolve, reject) {
    if(username == 'admin' && password == 'admin') {
      resolve();  
    } else {
      reject("用户名或密码错误");
    }    
  });
}

function logout() {
  sessionStorage.removeItem(USER_KEY);
}

function user() {
  return _user;
}

export default {isLogin, login, logout, user};