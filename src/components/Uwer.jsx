import React from "react"

const API_KEY="b579f58fb2ca327dee317f222b0e60b5"
const BASE_API_URL="http://api.openweathermap.org/data/2.5"

class Uwer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            dataWeather: null,
            errorMessage: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            city: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.getCurrentWeather()
        this.setState({
            city: ''
        })
    }
    
    componentDidMount() {
    }

    // custom methods goes here
    getCurrentWeather() {
        fetch(`${BASE_API_URL}/weather?q=${this.state.city}&appid=${API_KEY}`)
            .then( response => {
                if (!response.ok) {
                    this.setState({
                        errorMessage: 'Nothing city Has been found'
                    })
                }
                return response.json()
            })
            .then( dataWeather => this.setState({ dataWeather }))
            .catch(err => console.log(err))
    }

    renderCurrentWeather() {
        if (this.state.dataWeather === null) {
            return(
                <div className="content">
                    <p>Please search the city</p>
                </div>
            )
        }
        if (this.state.dataWeather && this.state.dataWeather.main !== undefined) {
            return(
                <div className="content">
                    <p>City: {this.state.dataWeather.name}</p>
                    <p>{this.state.dataWeather.weather[0].main}</p>
                </div>
            ) 
        }
        return(
            <div className="content">
                <p>Nothing city has found.</p>
            </div>
        )
    }


    render() {
        return(
            <div className="section">
                <div className="container">
                    <h1 className="title">{this.props.title}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} autoFocus/>
                    </form>
                    {this.renderCurrentWeather()}
                </div>
            </div>
        )
    }
}

export default Uwer;
