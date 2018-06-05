import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import App from './components/App';

import store from './store';

ReactDOM.render(
  <React.Fragment>
    <App store={store} />
    <DevTools />
  </React.Fragment>,
  document.getElementById('root')
);
