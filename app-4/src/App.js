import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Login />
            </div>
        );
    }
}

export default App;


// If <Login /> was actually <Header />, I would put <Nav /> inside of <Header />. So then <Header /> would be a child of <App /> and <Nav /> would be a child of <Header />.
