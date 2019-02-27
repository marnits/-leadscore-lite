import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './containers/SignIn';
import Contacts from './containers/Contacts';
import ProtectedRoute from './containers/ProtectedRoute';
import UnprotectedRoute from './containers/UnprotectedRoute';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './configureStore';

const appComponent = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <UnprotectedRoute exact path="/" component={SignIn} />
          <ProtectedRoute path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  appComponent,
  document.getElementById('root'),
);

serviceWorker.unregister();
