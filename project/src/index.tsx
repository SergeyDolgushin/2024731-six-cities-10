import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { roomInfos } from '../src/mock/mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <App cards={roomInfos} />
);
