import React from 'react';
import UwerContainer from './components/UwerContainer.jsx'
//import logo from './logo.svg';
import './App.css';

//const data = {
//"coord": {
    //"lon": 112.63,
    //"lat": -7.98
//},
//"weather": [
    //{
        //"id": 804,
        //"main": "Clouds",
        //"description": "overcast clouds",
        //"icon": "04d"
    //}
//],
//"base": "stations",
//"main": {
//"temp": 301.01,
//"feels_like": 301.87,
//"temp_min": 301.01,
//"temp_max": 301.01,
//"pressure": 1009,
//"humidity": 56,
//"sea_level": 1009,
//"grnd_level": 959
//},
//"visibility": 10000,
//"wind": {
//"speed": 2.92,
//"deg": 192
//},
//"clouds": {
//"all": 99
//},
//"dt": 1599982611,
//"sys": {
//"country": "ID",
//"sunrise": 1599949457,
//"sunset": 1599992808
//},
//"timezone": 25200,
//"id": 1636722,
//"name": "Malang",
//"cod": 200
//}

function App() {
    return (
        <div className="App">
            <UwerContainer title="Uwer"/>
        </div>
    );
}

export default App;
