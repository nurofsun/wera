import React from 'react'

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
            <input className="UwerLocationInput" type="text" name="city" value={this.props.location} onChange={this.handleChange} autoFocus/>
        )
    }
}

export default UwerLocationInput;
