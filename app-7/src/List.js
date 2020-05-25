import React, {Component} from 'react';
import Todo from "./Todo";
import App from './App';

export default class List extends Component {
    render() {
        let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element} />;
        });

        return <div> {list} </div>;
    }
}
