import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import 'index.scss';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


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

function Label() {
  return (
    <Wrapper>
      <Main>
        <h2>标签</h2>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

function Money() {
  return (
    <Wrapper>
      <Main>
        <h2>记账</h2>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

function Statistics() {
  return (
    <Wrapper>
      <Main>
        <h2>统计</h2>
      </Main>
      <Nav/>
    </Wrapper>
  );
}

function NoMatch() {
  return <h2>该页面不存在</h2>;
}

export default App;
