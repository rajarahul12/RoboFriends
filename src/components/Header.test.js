import { shallow } from "enzyme";
import Header from "./Header";
import React from "react";

it("Expect to render Header Component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
