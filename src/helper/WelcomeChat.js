import React from "react";
import ChatScreen from "../view/Chatscreen";
import ReqBar from "../view/RequestBar";
import Wrap from "./Wrap";



export default (props)=>{
    return (
        <Wrap>
        <ReqBar/>
        <ChatScreen {...props}/>
        </Wrap>
    )
}