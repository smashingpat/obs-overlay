import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from './routes';


class App extends Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.dispatch({
            type: 'INCREMENT_COUNT',
        });
    }
    render() {
        return (
            <div>
                <Routes />
            </div>
        );
    }
}

export default App;
