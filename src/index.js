import React from 'react';
import { render } from 'react-dom';
import './index.css';
import StorePicker from './components/StorePicker';
import registerServiceWorker from './registerServiceWorker';


render(<StorePicker />, document.getElementById('root'));
registerServiceWorker();
