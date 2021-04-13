import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { QueryParamProvider } from 'use-query-params';
import { Route, BrowserRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Main from '../pages/main';
import DashboardProvider from "../utils/context";

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};

const server = setupServer(
  rest.get('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard'),
  async (req, res, ctx) => {
    return res(ctx.json({
      code: 2200,
      data: {
        "user_category": {
          "risk_averse": "762",
          "conservative": "474",
          "moderate": "182",
          "risk_taker": "607"
        },
      }
    }))
  }
)

beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers()) //
afterAll(() => server.close())

const Wrapper = ({ children }) => (
  <DashboardProvider>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        {children}
      </QueryParamProvider>
    </BrowserRouter>
  </DashboardProvider>
)

test('show loading screen', () => {
  render(<Main />, { wrapper: Wrapper });
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
})

test('getting dashboard data', async () => {
  render(<Main />, { wrapper: Wrapper });
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  expect(screen.getByText(/conversion/i)).toBeInTheDocument();
})

test("should render error context consumer withour provider", () => {
  expect(() => render(<Main />)).toThrow(
    "useDashboard must be used within a DashboardProvider"
  );
});