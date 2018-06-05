import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import App from './components/App';

import Store from './store/Store';

ReactDOM.render(
  <React.Fragment>
    <App store={new Store()} />
    <DevTools />
  </React.Fragment>,
  document.getElementById('root')
);
