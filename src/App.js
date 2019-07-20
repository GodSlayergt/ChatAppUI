import React from 'react';
import ChatScreen from "./helper/WelcomeChat";
import Home from "./view/Home";
import Signin from "./view/Signin";
import Login from "./view/Login";
import Welcome from "./helper/Welcome";
import Friends from "./view/Friends";
import json from "./helper/jsonwebtoken";
import req from "./view/Request";
import {connect} from "react-redux";
import  {BrowserRouter as Router, Route,Switch} from "react-router-dom";

function App(props) {
    


    
    
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route  path="/signin" component={Signin}/>
    <Route path="/login" component={Login}/>
    <Route path="/chat/:room" component={ChatScreen}/>
     <Route path="/friendsreq" component={Friends} />
     </Switch>
   </Router>
  
  );
}

const setstatetoprops=(state)=>{
    return{
        loading:state.loading
    }
}


const setdispatchtoprops=(dispatch)=>{
    return{
        getuser:(data)=>{dispatch(req.getuser(data))},
        load:()=>{dispatch({type:"loading"})}
    }
}



export default connect(setstatetoprops,setdispatchtoprops)(App);


