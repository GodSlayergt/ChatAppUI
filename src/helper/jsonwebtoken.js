import json from "jsonwebtoken";

const temp={};
const secret ="this is a secret key";
temp.signin=(payload,history)=>{
    
    
    if(localStorage.getItem("token"))
        {
            return(localStorage.getItem("token"));
        }
    
    
    
    json.sign({id:payload},secret,{expiresIn:'1day'},(err,token)=>{
        
         localStorage.setItem("token",token);
         console.log("json sign in");
         console.log(token);
         history.push("/");
    });
   
   
    
    
    
}

temp.verify=()=>{
    const token=localStorage.getItem("token");
   /* return (json.verify(token,secret,(err,decode)=>{if(err){
                                                     if(err.name=='TokenExpiredError')
                                                     { localStorage.removeItem("token");
                                                      return err;}
                                                     }
                                                    else return decode;}))*/
    
    
    
    
    return(
    
    json.verify(token,secret,(err,decode)=>{
        if(err)
            {
            
                localStorage.removeItem("token");
                return "error";
            }
        else
            {
                return decode;
            }
    })
    
    
    
    )
    

}



export default temp;