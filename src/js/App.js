import React from 'react';
import { hot } from 'react-hot-loader';

import Button from './components/button'; 
import styles from '../css/App.css';

const App = () => (
    <div className="stopwatch-adaptive">
        <header className={styles.stopwatchHeader}>
            {'<button id="start" onClick="startTime()">start</button>'}
        </header>
    </div>
);

export default hot(module)(App);