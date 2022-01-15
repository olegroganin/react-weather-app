import React from 'react';


function WeatherInput({city, setCity}) {
   const handleChange = (e) => {
      setCity(e.target.value)
   }

   return (
      <>
         <label>
	    <input 
               className='weatherapp-input' 
	       type="text" 
	       placeholder='Enter your city...' 
	       onChange={handleChange} 
	       value={city} 
	    />	
         </label>
      </>
   )
}

export default WeatherInput;
