import * as React from 'react';

import Main from './pages/main';
import TopMenu from './components/top-menu';
import DashboardProvider from './utils/context';

function App() {
  return (
    <DashboardProvider>
      <TopMenu />
      <Main />
    </DashboardProvider>
  );
}

export default App;
