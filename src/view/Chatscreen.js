import React,{Component} from "react";
import "../css/header.css";
import "../css/chatscreen.css";
import Text from "./Text";
import socket from "../helper/socket"
import {connect} from "react-redux";
import Screen from "./Screen";
import Details from "./Details";
import Online  from "./Online";








class chatscreen extends Component{
    
            state={
                   textcomponent:null,
                   }
                   
componentWillMount()
{
    console.log(this.props);
}

componentWillReceiveProps(nextProps)
{   
    if(typeof(nextProps.incoming_messg)!="undefined")
    {
    let temp=(<Text message={nextProps.incoming_messg.body} name={nextProps.incoming_messg.name} type="nonuser"/>)
    this.setState({textcomponent:temp});
    }
}
       
componentDidMount()
{console.log(this.props.user);  
    const data={
        id:this.props.user._id,
        name:this.props.user.name,
        room:this.props.match.params.room,
        } 
    socket.join(data);
}


click=()=>{

    /*
    
    sending data by socket
    passing message to Text component
    
    */
    let text=document.getElementById("textarea");
    let value=text.value;
    let temp =(<Text message={value} type="user" name="gaurav"/>);               
    var data={
        id:this.props.user._id,
        name:this.props.user.name,
        room:this.props.match.params.room,
        body:value
        }    
socket.send(data);
text.value="";
this.setState({textcomponent:temp});    
    
}

        render(){
    return(
    
    <div className="clearfix"  id="main">
        <div id="details" className="left-float">
         <Details/>
        </div>
         <div className="left-float" id="screen">
        <Screen  message={this.state.textcomponent}/>
        <div id="submit" className="clearfix">
        <div className="write">
        <textarea id="textarea" row="7" column="7" spellCheck="false" placeholder="Text Here..." ></textarea>
        </div>
        <div className="submitbutton">
        <button onClick={this.click}> Send </button>
        </div>
        </div>
        </div>
        <div id="onlinediv" className="right-float">
        <Online user={this.props.user} room={this.props.match.params.room}/>
        </div>
        
    </div>    
    
    
    )
        }

    
}
const setStateToProps=(state)=>{
    return{
    incoming_messg:state.incoming_messg,
     user:state.user
    }
}


export default connect(setStateToProps,null)(chatscreen);