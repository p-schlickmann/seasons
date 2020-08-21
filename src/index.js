import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './components/SeasonDisplay.js'

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    render() {
        if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} month={new Date().getMonth()}/>
        } else if (!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        } else {
            return <div>Loading...</div>
        }
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"))
