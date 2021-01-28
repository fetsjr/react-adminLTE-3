import * as React from 'react';
import {BrowserRouter, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { renderRoutes } from "react-router-config"

import './App.css';
import './assets/scss/adminlte.scss'
import {FixedSidebar} from "./layouts/FixedSidebar";
import routes from "./routes"

const history = createBrowserHistory();

function App() {
  return (
      <BrowserRouter history={history}>
          { renderRoutes(routes)}
      </BrowserRouter>
     // <FixedSidebar />
  );
}

export default App;
