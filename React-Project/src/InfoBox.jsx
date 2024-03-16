import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    

    const HOT_URL="https://s.w-x.co/util/image/w/in-hot_1.jpg?crop=16:9&width=480&format=pjpg&auto=webp&quality=60";

    const COLD_URL="https://minimalistfocus.com/wp-content/uploads/2023/09/54ee232e3b67f.image_.jpg";

    const RAIN_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0L9SHl9h3wP36YWZ3ax0vrHWWX6E_x36wa2kepswWF3WNwzP33DwUIMk-D2UGApHWKk&usqp=CAU";



    return(
        <div className="InfoBox">

        <div className='cardContainer'>
            <Card sx={{ maxWidth: 360 }} className='CardStyle'>
                <CardMedia
                    sx={{ height: 180 }}
                    image={info.humidity >80 ? RAIN_URL :info.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.humidity >80 ? <ThunderstormIcon/> :info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div><b>Tempreature={info.temp}&deg;C</b></div>
                    <div><b>Humidity={info.humidity}</b></div>
                    <div><b>Minimum Tempreture={info.tempMin}&deg;C</b></div>
                    <div><b>Maximum Tempreture={info.tempMax}&deg;C</b></div>
                    <div><b>The Weather Can Be Described as {info.weather} And Feels Like {info.feelslike}&deg;C</b></div>
                    
                    </Typography>
                </CardContent>
                
                </Card>
        </div>

        </div>
    )
}