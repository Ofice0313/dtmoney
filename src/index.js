import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transations', () => {
      return [
        {
          id: 1, 
          title: 'Transations 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    });
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
