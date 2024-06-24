function TravelCard({tr={title:"Mount Fuji",
        key: 1,
        location:"Japan",
        googleMapLocation:"#",
        starDate:"12Jan 1981",
        description:`Mount Fuji (富士山, Fujisan) is with 3776 meters Japan's highest 
            mountain. It is not surprising that the nearly perfectly shaped volcano has 
            been worshiped as a sacred mountain and experienced 
            big popularity among artists and common people throughout the centuries.`,
        imageUrl: "https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg?w=300"
    }}){
        console.log(`key: ${tr.key}`);
    return (
        <li key={tr.key} className="d-flex flex-row justify-content-start align-items-stretch m-2">
            <img className="img-fluid" src={tr.imageUrl} ></img>
            <article className="d-flex flex-column justify-content-start align-items-start mx-2">
                <div className="d-flex flex-row justify-content-start align-items-center m-2">
                     <i className="big-ico mx-1 my-0">&#xF3E7;</i>
                     <h4 className="h4 mx-1 my-0">{tr.location.toUpperCase()}</h4>
                     <a href="https://example.com" className="text-decoration-underline mx-1 my-0">View on GoogleMaps</a>
                </div>
                <h3 className="h3 m-2">{tr.title}</h3>
                <h5 className="h5 m-2">{tr.starDate}</h5>
                <p className="text-start">&nbsp;&nbsp;{tr.description}</p>
                
            </article>
            <video src="blob:https://www.youtube.com/87791e11-4feb-4d1a-8d7d-e6de682356a2"></video>

            
        </li>
    )
}

function Title(){
    return(
            <h4 key="1" className="w-100 travel-header p-2 h4">My traveljournale</h4>
    )
}

export {TravelCard, Title}