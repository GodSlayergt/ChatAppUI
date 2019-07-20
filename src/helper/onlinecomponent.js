import React from "react";
import socket from "./socket"


const sendreq=(props)=>{
 
    console.log(props.receiver);
    const data={
        user:props.user,
        receiver:props.receiver
    }
    console.log(data);
   
    socket.sendreq(data);
}

const onlinecomponent=(props)=>{
    
    return (
                   <div style={{"marginTop":"7px","marginLeft":"7px"}}>
                    <span>{props.name}</span>
                    <span className="online-content-sendreq" onClick={()=>{sendreq(props);}}>SendRequest</span>
                    <span className="online-content-privatechat">PrivateChat</span>
                    </div>
    
    )
}


export default onlinecomponent;