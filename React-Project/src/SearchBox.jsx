import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';

export default function SearchBox({updateInfo}){

    let [city ,setCity]=useState("");
    let [error ,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="dce8841f2f6212c7802a2fa5e0c911fc";

    let getWeatherInfo= async()=>{

        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        };


    };

    

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit= async(event)=>{

        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        };
        
        
    };


    return(
        <div className='SearchBox'>
            <h3 className='Search'>Search For Your City !</h3>


            <form onSubmit={handleSubmit}>

            <TextField id="city" label="City Name" variant="filled" color="success" focused required 
            value={city} 
            onChange={handleChange} />


            {/* <TextField id="city" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange}/> */}

            <br /><br />

            <Button variant="contained" 
            type='submit' 
            endIcon={<SendIcon />}>Search</Button>



        {error && <p style={{color:"red"}}>No Such Place Exist In Our API !</p>};

            </form>
        </div>
    )
}
