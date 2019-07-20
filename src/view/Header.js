import React from "react";
import "../css/header.css";
import icon from "../img/trophylogo.jpg";
import {Link} from "react-router-dom";

const header =  (props)=>{return (
    
    <div className="clearfix maindiv" >
    <div className={"clearfix rightdiv left-float"} >
    <div className="left-float" >
    <div className="imagediv">
    <img src={icon} alt="world cup" className="image" />
    </div>
    </div>
    <div className="left-float header">
    <h3>
    WorldCup
    </h3>
    </div>
    </div>
 
    
     <div className={"clearfix right-float leftdiv"}  >
    <div className={"right-float"} >
    <Link to="/login" >
    <button className="button2" >
     Login 
    </button>
    </Link>
    </div>
    <div className={"right-float"}>
    <Link to="/signin">
    <button className="button1">
      Signin 
    </button>
    </Link>
    </div>
    </div>
    </div>
    

)
  }

export default header;


