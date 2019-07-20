import React,{Component} from "react";
import imgsarray from "../helper/imgarray";
import Card from "./Card";
import "../css/header.css";
import "../css/groupchat.css";

const placeCards=(imgs)=>{
    const color=["#a0fb98","orange"," #98bafb","#e898fb"];
    var temp=imgs.map((i)=>{
        
        let index=Math.floor(Math.random()*(color.length));
        
        return (<Card key={i.name} image={i.img} name={i.name} color={color[index]}/> ) });
                                    
    return temp;                                
    
}


class GroupChat extends Component{
    
    state={
        
        cards:[],
    }
        
        componentWillMount()
        {
            this.setState({cards:placeCards(imgsarray)})
        }
        
        

   search=(e)=>{
            
            var regx=new RegExp(`^${e.target.value}`,"ig");
            let imgs=imgsarray.filter(
            (i)=>{
                if(regx.test(i.name))
                   return true;
            }
            
            
            )
            var cards=placeCards(imgs);
            this.setState({cards:cards});
            
            
        }
    
    
    
    
    render(){
        
        return(
            <div className="clearfix" id="groupchat">
             <div className="inputdiv" >
            <input type="text" className="input"
            placeholder="Search for your team" onInput={(e)=>{this.search(e)}}/>
            </div>
        <div className="clearfix" id="groupchatboard">            
            {this.state.cards}
            </div>
        
         </div>
        
        
        )
        
        
        
    }
    
    
    
    
    
}

export default GroupChat;
