import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'index.scss';
import Money from './views/Money';
import Label from './views/Label';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="money"/>
        <Route path="/label">
          <Label/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
