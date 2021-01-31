import * as React from 'react';
import {BrowserRouter, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { renderRoutes } from "react-router-config"

import './App.css';
import './assets/scss/adminlte.scss'
import 'overlayscrollbars/css/OverlayScrollbars.css';
import {FixedSidebar} from "./layouts/FixedSidebar";
import routes from "./routes"

const history = createBrowserHistory();

function App() {
  return (
      <BrowserRouter >
          { renderRoutes(routes)}
      </BrowserRouter>
     // <FixedSidebar />
  );
}

export default App;
