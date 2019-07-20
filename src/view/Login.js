import React,{Component}  from "react";
import "../css/login.css";
import req from "./Request";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Spinner from "../helper/spinner";
import GoogleSignin from "./GoogleSignin";

class Login extends Component{

login=()=>{
    console.log("click");
    
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    
 
    const data={
        name,
        password,
        history:this.props.history
    }
    console.log(data);
    this.props.load();
    this.props.send(data);


}

focus=(e)=>{
  e.target.value="";
}

    render(){
        
        let temp=(
            <div className="SIGNIN">
        <div className="SIGNIN-header">Login
        </div>
        <div className="FORM">
        <form>
        <div className="SIGNIN-field">
        <div className="SIGNIN-label">Name</div>
        <div className="SIGNIN-block"> <input type="text" placeholder="Name" name="name" id="name" /></div>
             </div>
        <div className="SIGNIN-field">
        <div className="SIGNIN-label">Password</div>
        <div className="SIGNIN-block"> <input type="password" placeholder="Password" name="password" id="password" />
        </div>
        </div>
         <div className="SIGNIN-field">
        <div className="SIGNIN-label"></div>
        <div className="SIGNIN-block"> 
        <input type="button"  value="Login" name="login" onClick={this.login} />
        </div>
        </div>
         </form>
         </div>
        </div>
        )
        
        if(this.props.loading)
            temp=(<Spinner/>)
        
        
        return (
                  <div>
                  {temp}
                  </div>
        )
     
    }


}


const setstatetoprops=(state)=>{
    return{
        loading:state.loading
    }
}


const setdispatchtoprops=(dispatch)=>{
    return{
        send:(data)=>{dispatch(req.login(data))},
        load:()=>{dispatch({type:"loading"})}
    }
}



export default connect(setstatetoprops,setdispatchtoprops)(Login);
