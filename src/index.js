import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import { selectLocationState } from './containers/App/selectors';
import App from './containers/App';
import SampleContainer from './containers/SampleContainer';
import SampleComponent from './components/SampleComponent';
import './index.css';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/route-one" component={SampleContainer} />
        <Route path="/route-two" component={SampleComponent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);