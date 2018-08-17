import { shallow } from "enzyme";
import Card from "./Card";
import React from "react";

it("Expect to render Card Component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
