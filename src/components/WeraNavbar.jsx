import React from 'react'

class WeraNavbar extends React.Component {
    render() {
        return(
            <nav className="WeraNavbar">
                {this.props.children}
            </nav>
        )
    }
}

export default WeraNavbar;
