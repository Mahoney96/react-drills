import React, {Component} from "react";
import logo from './logo.svg';
import "./App.css"

class App extends Component{
  //constructor is telling App which pieces of 
  constructor(){
    super();

    this.state = {
      massage: ""
    };
  }

  handleChange(value) // handle the value of the change of the input text box
  {
    this.setState({ message: value})
  }

  render(){
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;

// AXIOS -  makes requests to your server from your front-end


// RENDER - whenever a component renders => it's sending an AXIOS request for those variables from the parent 
//  - (that's why you import the necessary files/componentns at the top of App.js in src; AS the files and/or the componenents from other other files that'll be used, need to be accesiable further down using SUPER & CONSTRUCTOR

//Just like with Axios - 