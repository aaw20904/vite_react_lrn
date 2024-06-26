
import {images} from  "./data.js"
import React from "react";
 

function Title(){
    return(
            <h4 key="1" className="w-100 travel-header p-2 h4">My traveljournale</h4>
    )
}



function MemeHeader(){
    return(
       <nav className="meme-header p-3 d-flex flex-row justify-content-between align-items-center w-100">
        <div className="d-flex flex-row align-items-center ustify-content-center">
            <i className="big-ico text-white">&#xF226;</i>
            <h4 className="h4 text-white py-0 my-0 mx- 1">MemeGenerator</h4>
        </div>
        <h4 className="h4 text-white">Proj3</h4>
       </nav>
    )
}

function Meme(){
    const [meme , memeSetter] = React.useState({topText:"",bottomText:"",url:"https://imgflip.com/imgflip_white_96.png"});
       const [allMemeImages, allMemeImagesSetter] = React.useState(images.data.memes);   
     
     
     
    function onClick(ev){
        let rimg = getRandomImage();
        memeSetter( {...meme, url:allMemeImages[rimg].url});
        
    }

    
    function getRandomImage(){
        return (Math.random()*9)|0;
         
    }
 


  return(
    <main>
       <form className="parent-form my-2">
                <input type="text" className="div1 rounded m-1 form-control " placeholder="shut up" name="" id="" />
                <input type="text" className="div2 m-1 form-control  " placeholder="and take my money" name="" id=""/>
                <button type="button" className="div3 btn btn-primary  w-100" onClick={onClick}> get a new image </button>

       </form>
       <img src={meme.url} className="img-fluid" ></img>
        
       
    </main>
   
  )
}

export {  Title, MemeHeader, Meme}