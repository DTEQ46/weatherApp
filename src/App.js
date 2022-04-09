import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
function App() {
 return (
   <div>
     <div className="header">
            <h1> WEATHER APP</h1>
        </div>
     <Forecast />

       
         <h6>Page designed by DTEQ</h6>
  

   </div>
   
 );
}
export default App;