import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';


class RenderView extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.count}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count,
});

export default connect(mapStateToProps)(RenderView);