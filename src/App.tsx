import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import 'index.scss';
import Layout from './components/Layout';


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
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  );
}

function NoMatch() {
  return <h2>该页面不存在</h2>;
}

export default App;
