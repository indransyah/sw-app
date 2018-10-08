import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
  delay: 1e4,
});

const About = Loadable({
  loader: () => import('./containers/About'),
  loading: Loading,
});

const People = Loadable({
  loader: () => import('./containers/People'),
  loading: Loading,
});

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/people/:id" component={People} />
      </Switch>
    </Router>
  );
};

export default App;
