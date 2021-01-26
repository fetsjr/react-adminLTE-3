import * as React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import { renderRoutes } from "react-router-config"

import './App.css';
import './assets/scss/adminlte.scss'
import {FixedSidebar} from "./layouts/FixedSidebar";
import routes from "./routes"

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
          { renderRoutes(routes)}
      </Router>
     // <FixedSidebar />
  );
}

export default App;
