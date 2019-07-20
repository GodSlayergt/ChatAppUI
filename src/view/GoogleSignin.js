import React from "react";
import req from "./Request";
import Spinner from "../helper/spinner";
import {connect} from "react-redux";
import Wrap from "../helper/Wrap";



const signin=(props)=>{
    console.log("click");
    
    const data={
       
        history: props.history
    }
    console.log(data);
    props.load();
    props.send(data);
}






const googlesignin=(props)=>{
    
    var temp=( <div className="SIGNIN-block"> 
        <a href="http://127.0.0.1:3001/auth/google">
        <input type="button"  value={props.name +" with Google"} name="login"  />
        </a>
        </div>);
    if(props.loading)
        {
            temp=(<Spinner/>);
        }
    
    
    return(
      <Wrap>
        {temp}
      </Wrap>
                  
    )
}





const setstatetoprops=(state)=>{
    return{
        loading:state.loading
    }
}


const setdispatchtoprops=(dispatch)=>{
    return{
        send:(data)=>{dispatch(req.googlesignin(data))},
        load:()=>{dispatch({type:"loading"})}
    }
}



export default connect(setstatetoprops,setdispatchtoprops)(googlesignin);








