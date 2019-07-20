import axios from "./Axios";
import json from "../helper/jsonwebtoken";


const req={};

 req.signin =(data)=>{
    return (dispatch)=>{
        axios.localsignin(data.name,data.password)
            .then((payload)=>{
             dispatch({type:"loading"});
             dispatch({type:"user",user:payload.data});
            console.log(payload.data._id);
            json.signin(payload.data._id,data.history);
              })
            .catch((err)=>{
            dispatch({type:"loading"});
                console.log(err);
            })
       
    }
 }
 
 
 req.login =(data)=>{
    return (dispatch)=>{
        axios.login(data.name,data.password)
            .then((payload)=>{
             dispatch({type:"loading"});
            if( typeof(payload.data.type)==='undefined')
                {
             dispatch({type:"user",user:payload.data});
            console.log(payload);
             json.signin(payload.data._id,data.history);
                }
            else
                {
                    console.log(payload.data);
                }
              })
            .catch((err)=>{
            dispatch({type:"loading"});
                console.log(err);
            })
       
    }
 }


   req.friends=(id)=>{
    return (dispatch)=>{
        axios.friends(id)
            .then((payload)=>{
             dispatch({type:"loading"});
            console.log(payload);
            dispatch({type:"friends",friends:payload.data.friendsreq});
              })
            .catch((err)=>{
            dispatch({type:"loading"});
                console.log(err);
            })
       
    }
 } 
   
    req.getuser=(id)=>{
    return (dispatch)=>{
        axios.getuser(id)
            .then((payload)=>{
            console.log(payload); 
            dispatch({type:"user",user:payload.data});
              })
            .catch((err)=>{
                console.log(err);
            })
       
    }
 }
                  

    req.googlesignin=(data)=>{
        
        return (dispatch)=>{
            axios.googlesignin()
            .then((payload)=>{
             dispatch({type:"loading"});
             dispatch({type:"user",user:payload.data});
            console.log(payload.data._id);
            json.signin(payload.data._id,data.history);  
            })
            .catch((err)=>{
                 dispatch({type:"loading"});
                console.log(err);
            })
            
            
            
        }
        
        
    }
                  
                                  
                  
                  
 export default req;