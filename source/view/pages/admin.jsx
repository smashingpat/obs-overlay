import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../routes';
import * as actions from '../../core/actions';

import RenderView from '../render-view';
import styles from './admin-styles.css';

class Admin extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.adminpane}>
                    {routes.map(route => (
                        <div key={route.path}>
                            <Link to={route.path}>{route.path}</Link>
                        </div>
                    ))}
                    <h1>store:</h1>
                    <button onClick={this.props.incrementCount}>increment</button>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>
                </div>
                <div className={styles.renderpane}>
                    <RenderView />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count,
    loading: state.loading,
});

const mapDispatchToProps = {
    incrementCount: actions.incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
