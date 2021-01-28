import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider as StoreProvider } from 'react-redux';
import { configureStore } from './redux/store'
// import  fontawesome library
import './fontawesome';


ReactDOM.render(
  <StoreProvider store={configureStore()}>
      <Suspense fallback={<div>Loading... </div>}>
          <App />
      </Suspense>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
