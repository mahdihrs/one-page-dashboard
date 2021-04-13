import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import DashboardProvider from '../utils/context';

function render(ui, { ...options } = {}) {
  const Wrapper = (props) => <DashboardProvider {...props} />;
  
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';

export { render };
