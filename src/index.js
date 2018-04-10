import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
require('./style.less');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}

registerServiceWorker();

