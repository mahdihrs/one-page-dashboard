import * as React from 'react';
import { QueryParamProvider } from 'use-query-params';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary';
import { Main } from './pages';
import TopMenu from './components/top-menu';
import DashboardProvider from './utils/context';

function App() {
  return (
    <DashboardProvider>
      <BrowserRouter>
        <TopMenu />
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <ErrorBoundary>
              <React.Suspense fallback={<h3>Loading page content...</h3>}>
                <Route exact path="/" component={Main} />
              </React.Suspense>
            </ErrorBoundary>
          </Switch>
        </QueryParamProvider>
      </BrowserRouter>
    </DashboardProvider>
  );
}

export default App;
