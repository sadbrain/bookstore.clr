import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './global/state';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './global/style';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <GlobalProvider>
      <GlobalStyles>
         <App />
         <ToastContainer />
      </GlobalStyles>
   </GlobalProvider>,
);

reportWebVitals();
