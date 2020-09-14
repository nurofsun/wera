import React from 'react'
import { ReactComponent as MapIcon } from '../icons/map.svg'

class UwerLocationInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.OnUwerLocationChange(event.target.value)
    }
    render() {
        return(
            <div className="UwerFieldWithIcon">
                <input 
                    className="UwerLocationInput" 
                    type="text" 
                    name="city" 
                    value={this.props.location} 
                    placeholder="Location"
                    autoComplete="off"
                    onChange={this.handleChange}
                    autoFocus={true}
                    />
                <span className="UwerInputIcon">
                    <MapIcon/>
                </span>
            </div>
        )
    }
}

export default UwerLocationInput;
