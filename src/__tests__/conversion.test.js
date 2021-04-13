import * as React from "react";
import { render, screen } from '../test/test-utils';

import Conversion from "../components/conversion";

test("should render Conversion pie chart properly", () => {

  const { container } = render(<Conversion />);
  const title = screen.getByText(/conversion/i);
  expect(title).toBeInTheDocument();
  expect(title.textContent).toMatchInlineSnapshot(`"Conversion"`);
  const chartEl = container.firstChild.querySelectorAll("div")[4];

  expect(chartEl).toHaveStyle({ overflow: "hidden" });
});
