import React from "react";
import GroupChat from "../view/GroupChat";
import Header from '../view/Header';
import RequestBar from "../view/RequestBar";
import Home from "../view/Home";
import Wrap from "./Wrap";
import json from "./jsonwebtoken"



const Welcome=()=>{
    
      var temp=(
          <Wrap>
          <Header/>
          <Home/>
         </Wrap>);
          
   const decode =json.verify();

    console.log(decode);
    if(decode!="error")
        {
           temp=(<Wrap>
                 <RequestBar/>
                 <GroupChat/>
                 </Wrap>
                    ); 
        }
                 
      return (<Wrap>{temp} </Wrap>)
        }
    
 export default Welcome;