import React from "react";
import "../css/header.css";
import icon from "../img/trophylogo.jpg";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import req from "./Request";



const allreqs=(props)=>
{
        console.log("allreqs");
       props.load();
       props.getfriends(props.user._id);
    
}




const header =  (props)=>{
    var style="disablelink";
    
    if(Object.keys(props.req).length!=0)
        {
            style="enablelink"
        }
    
    
    
    
    return (
    
        
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
    <button className="friendreq" >
   <Link to="/req" className={style} >
     You have Req
    </Link>
    </button>
    </div>
    <div className={"right-float"} style={{marginTop:"4px"}}>
    <Link to="/friendsreq" onClick={()=>allreqs(props)}>
    <button className="button1">
      All Req
    </button>
    </Link>
    </div>
    </div>
    </div>
    

)
  }
const setstatetoprops=(state)=>{
    return{
        req:state.req,
        user:state.user
    }
}


const setdispatchtoprops=(dispatch)=>{
    return{
        load:()=>{dispatch({type:"loading"})},
        getfriends:(id)=>{dispatch(req.friends(id))}
    }
}

export default connect(setstatetoprops,setdispatchtoprops)(header);


