import React from 'react'

class UwerNavbar extends React.Component {
    render() {
        return(
            <nav className="UwerNavbar">
                {this.props.children}
            </nav>
        )
    }
}

export default UwerNavbar;
