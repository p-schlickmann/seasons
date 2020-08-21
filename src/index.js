import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './components/SeasonDisplay.js'
import Loading from './components/Loading.js'

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} month={new Date().getMonth()}/>
        } else if (!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        } else {
            return <Loading message="Waiting for location..."/>
        }
    }

    render() {
        return this.renderContent()
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"))
