import React from 'react';
import { hot } from 'react-hot-loader';
import styles from '../css/App.css';

const App = () => (
    <div className="stopwatch-adaptive">
        <header className={styles.stopwatchHeader}>
            Adaptive Stopwatch
        </header>
    </div>
);

export default hot(module)(App);