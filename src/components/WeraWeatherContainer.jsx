import React from 'react'
import { ReactComponent as CelsiusIcon  } from '../icons/celsius.svg'

class WeraWeatherContainer extends React.Component {
    render() {
        return(
            <div className="WeraContainer">
                <div className="WeraLocation">
                    <p>
                        <span className="WeraCity">{this.props.city}</span>,
                        <span className="WeraCountry">{this.props.country}</span>
                    </p>
                    <p>
                        <time dateTime={this.props.dateTime}>{this.props.time}</time>
                    </p>
                </div>
                <div className="WeraTemperature">
                    <span className="WeraCelsius">
                        {this.props.temperature}
                    </span>
                    <span className="WeraCelsiusIcon">
                        <CelsiusIcon/>
                    </span>
                </div>
                <div className="WeraStatus">
                    <span className="WeraStatusIcon">
                        <i className={this.props.icon}></i>
                    </span>
                    <span className="WeraStatusLabel">{this.props.status}</span>
                </div>
            </div>
        )
    }
}

export default WeraWeatherContainer;
