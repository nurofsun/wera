import React from 'react'
import { ReactComponent as MapIcon } from '../icons/map.svg'

class WeraLocationInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.OnWeraLocationChange(event.target.value)
    }
    render() {
        return(
            <div className="WeraFieldWithIcon">
                <input 
                    className="WeraLocationInput" 
                    type="text" 
                    name="city" 
                    value={this.props.location} 
                    placeholder="Location"
                    autoComplete="off"
                    onChange={this.handleChange}
                    autoFocus={true}
                    />
                <span className="WeraInputIcon">
                    <MapIcon/>
                </span>
            </div>
        )
    }
}

export default WeraLocationInput;
