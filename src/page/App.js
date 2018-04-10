import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./HomePage";
import Global from "../common/Global";

class App extends Component {

  constructor() {
    super();
    Global.init();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            // 在homepage前添加路由页面
            <Route path="/" component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
