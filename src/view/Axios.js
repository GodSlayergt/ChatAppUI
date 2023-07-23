import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

console.log(process.env.REACT_APP_SERVER_URL, "===");

const temp = {};

temp.localsignin = (name, password) => {
  return instance.post("signin", {
    name: name,
    password: password,
  });
};

temp.login = (name, password) => {
  return instance.post("login", {
    name: name,
    password: password,
  });
};

temp.getuser = (id) => {
  return instance.get("getuser", {
    params: {
      id: id,
    },
  });
};

temp.friends = (id) => {
  return instance.get("friends", {
    params: {
      id: id,
    },
  });
};

temp.googlesignin = () => instance.get("auth/google");

export default temp;
