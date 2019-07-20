import React,{Component} from "react";
import "../css/home.css";
import mf from "../helper/mf";
import imgs from "../helper/imgarray" 
import {Link} from "react-router-dom";



class home extends Component{
    
    state={
        index:0,
    };
    


  /*componentDidUpdate()
    {
        console.log("gaurav");
        const home=document.querySelector("#home");
   home.style.backgroundImage=`url(../img/${imgs[this.state.index]})`;
        this.setState({index:this.state.index+1});
       
    }
    */
    
    
    
    
    
    
    
    render(){
        
        
        
    return ( 
     
        <div>
        <div className="ROOT">
        <div className="ROOT-contain">
        <div className="ROOT-text"> World Cup </div>
        <div>
        <Link to="signin"  className="ROOT-signin"> Sign In </Link>
        <Link to="login" className="ROOT-login"> Login </Link>
        </div>
        </div>

        </div>
        </div>
     
     )
    
    
    
    }
}


























export default home;