import React, { Component } from "react"
import './App.css';
import { stateNames, stateFlags } from "../state-info.js"
import StateCard from './StateCard'

class App extends Component {

  state = {
    selectedFlagURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
  }

  handleClick = flag => {
    this.setState({selectedFlagURL: flag})
  }

  getFlagURL = name => {
    const parsedName = name.toLowerCase().replace(/[ .]/g, "")
    return stateFlags[parsedName]
  }

  renderStateCards = () => {
    return stateNames.map(name => {
      return <StateCard name={name} flag={this.getFlagURL(name)} handleClick={this.handleClick} />
    })
  }

  render() {
    return (
      <div className="App">

      <img id="selected-flag-display" src={this.state.selectedFlagURL} alt={"Flags of the US"} />

      <h1>Flags of the United States</h1>

      <div id="states-container">
      {this.renderStateCards()}
      </div>


      </div>
    );
  }


}

export default App;
