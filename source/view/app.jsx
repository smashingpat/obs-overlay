import React, { Component } from 'react';
import { connect } from 'react-redux';


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
                <h1>store:</h1>
                <button onClick={this.onClickHandler}>increment</button>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count,
    loading: state.loading,
});

export default connect(mapStateToProps)(App);
