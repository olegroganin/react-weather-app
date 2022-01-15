import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import WeatherInput from './components/WeatherInput.js';
import WeatherInfo from './components/WeatherInfo.js';


function App () {
   const apiKey = 'f52437d5017d5a78646240c61e82cad0';
   const [city, setCity] = useState('');
   const [temp, setTemp] = useState('');
   const [conditions, setConditions] = useState('');
   const [windSpeed, setWindSpeed] = useState('');
   const [humidity, setHumidity] = useState('');
  
   async function getWeather () {
      const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setTemp(`Temperature: ${Math.round((responce.data.main.temp)-273).toFixed(0)} °C`);
      setConditions(`Conditions: ${responce.data.weather[0].main}`);
      setWindSpeed(`Wind: ${Number(responce.data.wind.speed).toFixed(0)} m/s`);
      setHumidity(`Humidity: ${Number(responce.data.main.humidity).toFixed(0)} %`)
   }
      
   getWeather();
   
   return (
      <div className="weatherapp">
         <div className='container'>
            <h1 className='weatherapp-title'>Welcome to weather app!</h1>
               <WeatherInput 
                  city={city}
                  setCity={setCity}
               />
               <WeatherInfo 
                  city={city}
                  temp={temp}
                  conditions={conditions}
                  windSpeed={windSpeed}
                  humidity={humidity}
                  setTemp={setTemp}
                  setConditions={setConditions}
                  setWindSpeed={setWindSpeed}
                  setHumidity={setHumidity}
               />
         </div>
      </div>
   )
}

export default App;