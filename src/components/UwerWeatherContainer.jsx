import React from 'react'
import { ReactComponent as CelsiusIcon  } from '../icons/celsius.svg'

class UwerWeatherContainer extends React.Component {
    render() {
        return(
            <div className="weather">
                <div className="location">
                    <span className="city">{this.props.city}</span>,
                    <span className="country">{this.props.country}</span>
                </div>
                <time dateTime={this.props.dateTime}>{this.props.time}</time>
                <div className="status">
                    <span className="icon">
                        <i className={this.props.icon}></i>
                    </span>
                    <span className="label">
                        {this.props.status}
                    </span>
                </div>
                <div className="temperature">
                    <span className="celsius">
                        {this.props.temperature}
                    </span>
                    <span className="icon">
                        <CelsiusIcon/>
                    </span>
                </div>
            </div>
        )
    }
}

export default UwerWeatherContainer;
