import io from "socket.io/node_modules/socket.io-client/dist/socket.io";
import store from "./store";

const socket = io(process.env.REACT_APP_SERVER_URL);
const sock = {};
socket.on("connect", () => {
  console.log("connected");
});

socket.on("disconnect", () => {
  console.log("dissconnected");
});

socket.on("messg", (data) => {
  console.log(data);
  store.dispatch({ type: "add", data: data });
});

socket.on("notification", (data) => {
  store.dispatch({ type: "req", req: data });
  alert("you have a friend request from " + data.name);
});

socket.on("reqaccepted", (data) => {
  alert("your request has been accepted By " + data.name);
});

socket.on("totalonline", (data) => {
  console.log("online users");
  console.log(data);
  store.dispatch({ type: "onlineusers", onlineusers: data });
});

socket.on("googelres", (data) => {
  console.log("googleres");
  console.log(data);
  store.dispatch({ type: "user", onlineusers: data });
});

sock.send = (data) => {
  socket.emit("messg", data);
};

sock.sendreq = (data) => {
  socket.emit("sendreq", data, () => {
    console.log("request sended");
  });
};

sock.acceptreq = (data) => {
  socket.emit("acceptreq", data);
};

sock.join = (data) => {
  socket.emit("join", data, () => {
    console.log("joined");
  });
};

export default sock;
