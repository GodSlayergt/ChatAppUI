import axios from "axios";


const instance=axios.create({
    baseURL:"http://127.0.0.1:3001/"
})


const temp={};

temp.localsignin=(name,password)=>{
    
    return(
    instance.post("signin",{
        name:name,
        password:password
    })
        )
    
    
}

temp.login=(name,password)=>{
    
    return(
    instance.post("login",{
        name:name,
        password:password
    })
    
    )
}

temp.getuser=(id)=>{
    
      
    return(
    instance.get("getuser",{
        params:{
            id:id
        }
    })
       )
}

temp.friends=(id)=>{
   
    return(
    instance.get("friends",{
        params:{
            id:id
        }
    })
       )
}

temp.googlesignin = ()=> instance.get("auth/google")

export default temp;