
import imgs from "./imgarray.js";

const mf=()=>{
    console.log("test");
    const test=["red","blue","green"];
    var home=document.querySelector("#home");
    var i=0;
    var  n=imgs.length;
    setInterval(
        ()=>{      
    home.style.backgroundImage='url(' + imgs[i] +')';
          
        i++;
    if(i===n)
        i=0;
            
        },9000
        )
    

    
    
}

export default mf;