import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";
import axios from "axios";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import store from "./store";
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Authorization'] = localStorage.getItem('auth-token');
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
if (process.env.REACT_APP_ENVIRONMENT === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}
const stripePromise = loadStripe('pk_test_51MbGqYAJfzO3Sn9Y2yXdLVApINjjBRJ33Zq9cVvdEd3fOUybqh4Jj1h9RMJi6LQflZGo6WgvxAaIyeOJ9Qk8txJ700p7slIWSH');
root.render(
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>,
        </BrowserRouter>
      </React.Fragment>
    </Provider>
);

serviceWorker.unregister()
