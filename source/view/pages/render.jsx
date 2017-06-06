import React from 'react';
import RenderView from '../render-view';
import styles from './render-styles.css';


export default class Render extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <RenderView />
            </div>
        );
    }
}