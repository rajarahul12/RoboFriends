import { shallow } from "enzyme";
import Scroll from "./Scroll";
import React from "react";

it("Expect to render Scroll Component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
