/* eslint-disable no-undef */
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
    name: /users/i
  });
  expect(title).toBeInTheDocument();

  const divs = container.firstChild.querySelectorAll("div");
  expect(divs).toHaveLength(7);
});
