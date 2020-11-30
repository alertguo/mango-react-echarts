import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'index.scss';
import Money from './views/Money';
import Label from './views/Label';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {EditLabel} from './views/EditLabel';
import {AddTag} from './views/AddTag';


const AppWrapper = styled.div`
  max-width: 500px;
  color: #333;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="money"/>
          <Route exact path="/label/:id">
            <EditLabel/>
          </Route>
          <Route exact path="/label">
            <Label/>
          </Route>
          <Route exact path="/add">
            <AddTag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
