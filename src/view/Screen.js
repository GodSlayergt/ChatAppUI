import React,{Component} from "react";
import "../css/chatscreen.css"
import "../css/header.css";



class Screen extends Component
{
    
    
    state={
        messgarray:[],
    }


 componentWillReceiveProps(nextProps){
   
     this.setState({messgarray:[...this.state.messgarray,nextProps.message]});
   
}

    
    render(){return(
    
        
        <div id="text" className="clearfix">
        {this.state.messgarray}
        </div>
        
    
    
    
    )}
}


export default Screen;
