import React from 'react';
import ReactDOM from 'react-dom';

import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

// Mount function to start up the app

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate(location) {
      console.log('Navigation in container is detected');
      const { pathname: nextPathname } = location;
      if (nextPathname !== history.pathname) {
        history.push(nextPathname);
      }
    },
  };
};
// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through the container and we should export the mount function

export { mount };
