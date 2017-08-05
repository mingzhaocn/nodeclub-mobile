import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//TODO Use FastClick, ref #576 https://github.com/ant-design/ant-design-mobile/issues/576