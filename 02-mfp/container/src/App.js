import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
