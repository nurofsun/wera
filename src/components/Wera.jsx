import React from "react"
// app config
import Config from '../uwer.config.js'
// sub components
import WeraLocationInput from './WeraLocationInput.jsx'
import WeraWeatherContainer from './WeraWeatherContainer.jsx'
import WeraNavbar from './WeraNavbar.jsx'

import logo from'../logo.svg'

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

class Wera extends React.Component {
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
                <article className="WeraWelcomeMessage">
                    <header>
                        <img className="Logo" src={logo} width="64" alt="Wera"/>
                        <strong className="LogoLabel">Wera</strong>
                    </header>
                    <section>
                        <p className="Subtitle">
                            Instantly Check Current Weather Around More Than a Million Places.
                        </p>
                    </section>
                </article>
            )
        }
        if (this.state.dataWeather && this.state.dataWeather.main !== undefined) {
            return(
                <WeraWeatherContainer
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
            <div className="WeraErrorMessage">
                <p>Nothing location has found.</p>
            </div>
        )
    }

    componentDidMount() {
        this.dynamicTheme()
    }

    render() {
        return(
            <div className={'Wera ' + this.state.theme}>
                <header>
                    <WeraNavbar>
                        <form onSubmit={this.handleSubmit}>
                            <WeraLocationInput location={this.state.location} OnWeraLocationChange={this.handleChange}/>
                        </form>
                    </WeraNavbar>
                </header>
                <main>
                    {this.renderCurrentWeather()}
                </main>
            </div>
        )
    }
}

export default Wera;
