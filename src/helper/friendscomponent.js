import React from "react";
import socket from "./socket"


const acceptreq=(props)=>{
 
    console.log(props.receiver);
    const data={
        user:props.user,
        reqsender:props.reqsender
    }
    console.log(data);
   
    socket.acceptreq(data);
}

const friendscomponent=(props)=>{
    
    return (
                    <div>
                    <span>{props.name}</span>
                    <span className="online-content-sendreq" onClick={()=>{acceptreq(props);}}>AcceptRequest</span>
                    <span className="online-content-privatechat">Reject</span>
                    </div>
    
    )
}


export default friendscomponent;