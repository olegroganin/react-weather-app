import React from 'react';
import {useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';


function WeatherInfo ({city, temp, conditions, windSpeed, humidity, setTemp, setConditions, setWindSpeed, setHumidity}) {
   useEffect(() => {
      if(city === '') {
         setTemp('')
	 setConditions('')
	 setWindSpeed('')
	 setHumidity('')
      }
   })

   return (
      <>
         <CSSTransition
            in={temp, conditions, humidity, windSpeed}
	    timeout={1000}
	    classNames="weatherapp-info-transition"
	    unmountOnExit
	 >
	    <div className='weatherapp-info'>
               <p>{temp}</p>
	       <p>{conditions}</p>
	       <p>{humidity}</p>
	       <p>{windSpeed}</p>
            </div>
         </CSSTransition>
      </>
   )
}

export default WeatherInfo;



