import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
      </div>
    </Router>
  )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();