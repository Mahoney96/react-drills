import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import foodsToDisplay from '../../app-3/src/App';

class App extends Component{
  constructor() {
    super();

    this.state = {
      filterString: " ",
      foods: ["watermelon", "bananas", "Strawberries", "Kiwis", "mangos", "dragonFruit"]
    };
  }

  handleChange(filter){
    this.setState({ filterString: filter });
  }

  render(){
    let foodsToDisplay = this.state.foods
    filter((element, index) => {
      return element.includes(this.state.filterString);
  })
  .map((element, index) => {
  return <h2 key={index}>{element}</h2>;
  });

  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      {foodsToDisplay}

    </div>
  );
  }
}

export default App;
