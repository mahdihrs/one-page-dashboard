import * as React from 'react';

import Main from './pages/main';
import Header from './components/header';
import DashboardProvider from './utils/context';

function App() {
  return (
    <DashboardProvider>
      <Header />
      <Main />
    </DashboardProvider>
  );
}

export default App;
