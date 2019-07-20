import React,{Component} from "react";
import FriendsComponent from "../helper/friendscomponent";

import {connect} from "react-redux";



/*we have to start work from it */

class Friends extends Component{
    
    state={
        friends:[]
    }
   






componentWillReceiveProps(nextprops){
       console.log(nextprops.friends);
      var temp= nextprops.friends.map((e)=>(<FriendsComponent key={e._id} name={e.name} reqsender={e._id} user={nextprops.user}/>));
                                 
    this.setState({friends:[...temp]});
}


   
    
render(){
    
 
    
    return(
        <div>
         {this.state.friends}
        </div>
    
    )
    
    
}
    
    
    
}

const setstatetoprops=(state)=>{
    return{
        loading:state.loading,
        user:state.user,
        friends:state.friends, 
        req:state.req
    }
}



export default connect(setstatetoprops)(Friends);