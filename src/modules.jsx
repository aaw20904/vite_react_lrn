
import {images} from  "./data.js"

 

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
    let img_src="https://i.imgflip.com/2/72epa9.jpg"

    function onClick(ev){
        let rimg = getRandomImage();
       
        img_src = rimg;
        console.log(greeting("Bob"));
    }

    function greeting(name){
        let response ="";
        let hours = new Date().getHours();
        if (hours >= 4 && hours < 12){
            response="morning"
        } else if (hours >= 12 && hours < 17){
            response="afternoon"
        } else if(hours >= 17 && hours < 20){
            response="evening"
        } else if (hours >= 20 && hours < 4){
            response="night"
        }
        return `Good ${response}, ${name}!`;
    }


    function getRandomImage(){
        let randomNumber= (Math.random()*2)|0;
        return images.data.memes[randomNumber].url;
    }
  return(
    <main>
       <form className="parent-form my-2">
                <input type="text" className="div1 rounded m-1 form-control " placeholder="shut up" name="" id="" />
                <input type="text" className="div2 m-1 form-control  " placeholder="and take my money" name="" id=""/>
                <button type="button" className="div3 btn btn-primary  w-100" onClick={onClick}> get a new image </button>

       </form>
       <img src={img_src} className="img-fluid" ></img>
    </main>
   
  )
}

export {  Title, MemeHeader, Meme}