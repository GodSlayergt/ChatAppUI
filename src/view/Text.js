import React from "react"
import "../css/text.css";
import"../css/header.css"




const Text=(props)=>{
    
    
    
    return(   
        <div id="message" className={props.type}>
        <span id="outer-span">
        <span id="message-span"> {props.message} </span>
        <span id="message-name">  {props.name}  </span>
        </span>
        </div>
       
 
    
    
    
    )
    
    
    
}

export default Text;