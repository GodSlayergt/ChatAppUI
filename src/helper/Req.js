import React from "react";
import {connect} from "react-redux";


const req =  (props)=>{
   
    
    
    
    
    return (
    
        
    <div>
        {JSON.stringify(props.req)}
    
    </div>
    

)
  }

const setstatetoprops=(state)=>{
    return{
        req:state.req,
    }
}

export default connect(setstatetoprops)(req);


