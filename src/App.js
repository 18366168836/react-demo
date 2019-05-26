import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div className="App">header</div>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact render={() => <div>index</div>} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
