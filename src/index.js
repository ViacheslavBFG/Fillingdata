import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import './18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...!</div>}>
      <BrowserRouter basename="/Fillingdata">
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
