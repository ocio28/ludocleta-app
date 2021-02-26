import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-less/semantic.less'
import 'moment/locale/es'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
