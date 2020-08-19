import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); //--NOTE: Super() Here is allowing for reference to any of the parent elements imported at top)
    this.state = {
      foods: ["watermelon", "strawberries", "bananas", "mango", "dragonfruit", "blueberries"]
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    }); 

    return <div className="App">{foodsToDisplay}</div> //Here you are referencing the foodsToDisplay array index, and using render 'ToDisplay' 
  }
}

export default App;

// Need to add a stateful part to App component
// Need data to be in an array.
// This is showing an array of data on state, that is then shown on the DOM as a list. 
