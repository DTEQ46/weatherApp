import React, {useState} from 'react';
import Conditions from '../conditions/conditions';
import '../../App.css';


const Forecast = () => {
    const [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');
    const uriEncodedCity = encodeURIComponent(city);
    const uriEncodedCountry = encodeURIComponent(country);

    
    
    const getForecast = (e) => {
        e.preventDefault();

        if (!uriEncodedCity || !uriEncodedCountry){
            alert('Enter Valid Input');
        };


        
        

        // https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric"
        
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${uriEncodedCity},${uriEncodedCountry}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fbdad90bfamsh6fefce3e8c34351p17aa3cjsn6ced871e2f14",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
       

    }
    return (

    <div>
        <form>
                <input
                    className='fill_1'
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />

                <input
                    className='fill_2'
                    type="text"
                    placeholder="Enter Country"
                    maxLength="50"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    />

                <button  type='submit' className='Button' onClick={getForecast} >Get Report</button>

                
                </form>

                

        <Conditions
            responseObj={responseObj}
            />

            
    </div>

    
    
    );
};

export default Forecast 
