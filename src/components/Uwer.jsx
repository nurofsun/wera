import React from "react"
// app config
import Config from '../uwer.config.js'
// sub components
import UwerLocationInput from './UwerLocationInput.jsx'
import UwerWeatherContainer from './UwerWeatherContainer.jsx'
import UwerNavbar from './UwerNavbar.jsx'

const { API_KEY, BASE_API_URL } = Config;

function getMonthName(monthIndex) {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'Juney',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months[monthIndex - 1];
}

function getDayName(dayIndex) {
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Saturday'
    ];

    return days[dayIndex];
}

class Uwer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            dataWeather: null,
            errorMessage: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(value) {
        this.setState({
            location: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.getCurrentWeather()
        this.setState({
            location: ''
        })
    }
    generateIcon(code) {
        return `owi owi-${code}`
    }
    // custom methods goes here
    getCurrentWeather() {
        fetch(`${BASE_API_URL}/weather?q=${this.state.location}&appid=${API_KEY}&units=metric`)
            .then( response => {
                if (!response.ok) {
                    this.setState({
                        errorMessage: 'Nothing location Has been found'
                    })
                }
                return response.json()
            })
            .then( dataWeather => this.setState({ dataWeather }))
            .catch(err => console.log(err))
    }
    dateFormatter(date) {
        let today = date.getDay();
        let dateToday = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        return `${getDayName(today)}, ${dateToday} ${getMonthName(month)} ${year}`
    }

    renderCurrentWeather() {
        if (this.state.dataWeather === null) {
            return(
                <p>
                    Please input location.
                </p>
            )
        }
        if (this.state.dataWeather && this.state.dataWeather.main !== undefined) {
            return(
                <UwerWeatherContainer
                    dateTime={new Date()}
                    time={this.dateFormatter(new Date())}
                    city={this.state.dataWeather.name}
                    country={this.state.dataWeather.sys.country}
                    temperature={Math.round(this.state.dataWeather.main.temp)}
                    status={this.state.dataWeather.weather[0].description}
                    icon={this.generateIcon(this.state.dataWeather.weather[0].icon)}
                />
            ) 
        }
        return(
            <div className="content">
                <p>Nothing location has found.</p>
            </div>
        )
    }


    render() {
        return(
            <div className="section">
                <div className="container">
                    {this.renderCurrentWeather()}
                    <UwerNavbar>
                        <form onSubmit={this.handleSubmit}>
                            <UwerLocationInput location={this.state.location} OnUwerLocationChange={this.handleChange}/>
                        </form>
                    </UwerNavbar>
                </div>
            </div>
        )
    }
}

export default Uwer;
