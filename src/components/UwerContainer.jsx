import React from "react"

class UwerContainer extends React.Component {
    render() {
        return(
            <div className="section">
                <div className="container">
                    <h1 className="title">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default UwerContainer;
