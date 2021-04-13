import * as React from "react";
import { render, screen } from "@testing-library/react";

import DashboardProvider from "../utils/context";
import Users from "../components/users";

test("should render Users variable pie chart properly", () => {
  const Wrapper = (props) => {
    return <DashboardProvider {...props} />;
  };

  const { container } = render(<Users />, { wrapper: Wrapper });
  const title = screen.getByRole("heading", {
    name: /users/i,
  });
  expect(title).toBeInTheDocument();

  const chartEl = container.firstChild.querySelectorAll("div")[5].firstChild;
  expect(chartEl).toHaveClass("highcharts-root");

  const chartContainer = container.querySelector("#users > div:nth-child(2)").firstChild;
  expect(chartContainer).toHaveClass('highcharts-container');

  const divs = container.firstChild.querySelectorAll("div");
  expect(divs).toHaveLength(6);
  // expect(chartContainer).toMatchInlineSnapshot();
});
