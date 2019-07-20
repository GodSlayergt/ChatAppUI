const InitialState={
    
      incoming_messg:{
        id:null,
        name:null,
        room:null,
        body:null
    },
   
    user:{},
    req:{},
    friends:[],
    onlineusers:[],
    loading:false
}



const reducer=(state=InitialState,action)=>{
    
    
    
    switch(action.type)
    {
            
        case "add":{
                    
                      return{
                          ...state,incoming_messg:action.data
                      }
                    }  
            
        case "user":{
                       return{
                           ...state,user:{...action.user}
                       }
            
                    } 
        
        case "loading":{
                         return{
                             ...state,loading:!state.loading
                         }
                        }        
        
        case "req":{
                        return{
                            ...state,req:{...action.req}
                        }
        }
            
        case "friends":{
                        return{
                            ...state,friends:[...action.friends]
                        }
            
                        } 
        case "onlineusers":{
                             return{
                                 ...state,onlineusers:[...action.onlineusers]
                             }
                            }    
            
        default:{
                  return state;
                 }    
            
            
            
            
    }
    
    
    
    
    
}
export default reducer;