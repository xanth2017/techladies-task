import React from 'react';
import ReactDOM from 'react-dom';

// // Importing the bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the custom scss
import './custom.scss';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
