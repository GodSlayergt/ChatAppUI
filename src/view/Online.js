import React,{Component} from "react";
import "../css/online.css";
import OnlineComponent from "../helper/onlinecomponent"
import {connect} from "react-redux";












class Online extends Component {
    
    
onlineusers=()=>{  
    console.log(this.props)
    var t=[];
    for(var e of this.props.onlineusers)
        {
            
        if(e.room===this.props.room && e.id!=this.props.user._id)
            {
             let temp=( <OnlineComponent key={e.id} receiver={e.id} name={e.name} user={this.props.user}/>) 
                t.push(temp);
           }                 
    }   
    console.log(t);
    return t;
    
}
    
 
    render()
    {
    return(
    
    <div className="online-content">
           {this.onlineusers()}
   </div>
       
    )
    }
    
}

const setstatetoprops=(state)=>{
    return {onlineusers:state.onlineusers,
            user:state.user
           }
}
export default connect(setstatetoprops)(Online);