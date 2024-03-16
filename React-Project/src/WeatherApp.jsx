import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        feelslike:31.44,
        temp:33.05,
        tempMin:27.22,
        tempMax:36.15,
        humidity:47,
        weather:"Haze",
    });


    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };


    return(
        
        <div style={{textAlign:"center"}}>
            <h1 className="Myname">Weather Application By Adesh</h1>
            
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
            
        </div>
        
    )

    
    
}
