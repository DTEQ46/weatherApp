import React from 'react';
import '../../../src/App.css';
import DesktopLogo from '../../assets/DesktopLogo.png';
import 'weather-icons/css/weather-icons.css';

    
function Conditions(props){
    const toOne = (num) => {
        return Math.floor(num);
    };
    var icon = '';
    if (props.responseObj.cod === 200){
        if(props.responseObj.weather[0].id >= 200 && props.responseObj.weather[0].id <= 232 ){
            icon='wi wi-thunderstorm';
        }
        else if(props.responseObj.weather[0].id >= 300 && props.responseObj.weather[0].id  <= 321 ){
            icon='wi wi-sleet';
        }
        else if(props.responseObj.weather[0].id >= 500 && props.responseObj.weather[0].id  <= 531 ){
            icon='wi wi-storm-showers';
        }
        else if(props.responseObj.weather[0].id >= 600 && props.responseObj.weather[0].id  <= 632 ){
            icon='wi wi-snow';
        }
        else if(props.responseObj.weather[0].id >= 701 && props.responseObj.weather[0].id  <= 781 ){
            icon='wi wi-fog';
        }
        else if(props.responseObj.weather[0].id === 800){
            icon='wi wi-day-sunny';
        }
        else if(props.responseObj.weather[0].id >= 801 && props.responseObj.weather[0].id  <= 804 ){
            icon='wi wi-day-fog';
        }

        else{
            icon='wi wi-day-fog'; 
        }
  
    }
    
   return (
       <div className='Wrapper'>
           {props.responseObj.cod === 200 ?
           <div className='container'>
        

               <div className='logo'>
            <img src= {DesktopLogo} alt='logo' />
            </div>
               <div className="temperature-card">
                   <h1 className="cName">{props.responseObj.name}, {props.responseObj.sys.country}</h1>
                   <h1 className="temperature">{toOne(props.responseObj.main.temp)}&deg;C</h1>
                    

                   <i className= {icon}></i>

                   <div className="min_max_temp">
                    <span>
                  <h1 className="max">{toOne(props.responseObj.main.temp_max)}&deg;C</h1>
                  </span>
                  <span>
                  <h1 className="min">{toOne(props.responseObj.main.temp_min)}&deg;C</h1>
                  </span>
                  
               </div>
              <p>{props.responseObj.weather[0].description}</p>  
               </div>
               </div>
            
           : null
           
           }

           
       </div>
   )
   
}

export default Conditions;