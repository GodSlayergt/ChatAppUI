import React from "react";
import {Link} from "react-router-dom";
import "../css/Card.css";
import "../css/header.css";




const Card=(props)=>{
   
    const style={
        borderColor:props.color,
    }
    
    return (

        <div id="maincard" className="left-float" style={style}>
        <Link to={"chat/"+props.name}>
        <div id="imgdiv">
        <img src={props.image} alt="india" id="img"/>
        </div>
        <div id="bar" className="clearfix" style={style}>
            <div id="team" className= "left-float"> {props.name} </div>
            <div id="online" className= "right-float"> Online </div>
        </div>
        </Link>
        </div>
        
        
    
    
    
    
    
)}

export default Card;