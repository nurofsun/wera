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
            errorMessage: null,
            theme: null
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
    dynamicTheme() {
        let date = new Date();
        let hours = date.getHours();
        if (hours > 17) {
            this.setState({
                theme: 'dark'
            })
        } else {
            this.setState({
                theme: 'light'
            })
        }
        
    }
    renderCurrentWeather() {
        if (this.state.dataWeather === null) {
            return(
                <div className="UwerWelcomeMessage">
                    <h2 className="Title">
                        Uwer
                    </h2>
                    <h4 className="Subtitle">
                        Instantly Check Current Weather Around 2000 Million Places.
                    </h4>
                </div>
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
            <div className="UwerErrorMessage">
                <p>Nothing location has found.</p>
            </div>
        )
    }

    componentDidMount() {
        this.dynamicTheme()
    }


    render() {
        return(
            <div className={'Uwer ' + this.state.theme}>
                {this.renderCurrentWeather()}
                <UwerNavbar>
                    <form onSubmit={this.handleSubmit}>
                        <UwerLocationInput location={this.state.location} OnUwerLocationChange={this.handleChange}/>
                    </form>
                </UwerNavbar>
            </div>
        )
    }
}

export default Uwer;
