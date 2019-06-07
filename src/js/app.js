import { hot } from 'react-hot-loader/root';
import React from 'react';

import Timer from './components/timer';

import '../css/app.css';

const App = () => (
    <Timer />
);

export default hot(App);