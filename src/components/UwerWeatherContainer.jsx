import React from 'react'
import { ReactComponent as CelsiusIcon  } from '../icons/celsius.svg'

class UwerWeatherContainer extends React.Component {
    render() {
        return(
            <div className="UwerContainer">
                <div className="UwerLocation">
                    <p>
                        <span className="UwerCity">{this.props.city}</span>,
                        <span className="UwerCountry">{this.props.country}</span>
                    </p>
                    <p>
                        <time dateTime={this.props.dateTime}>{this.props.time}</time>
                    </p>
                </div>
                <div className="UwerTemperature">
                    <span className="UwerCelsius">
                        {this.props.temperature}
                    </span>
                    <span className="UwerCelsiusIcon">
                        <CelsiusIcon/>
                    </span>
                </div>
                <div className="UwerStatus">
                    <span className="UwerStatusIcon">
                        <i className={this.props.icon}></i>
                    </span>
                    <span className="UwerStatusLabel">{this.props.status}</span>
                </div>
            </div>
        )
    }
}

export default UwerWeatherContainer;
