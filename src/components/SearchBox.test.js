import { shallow } from "enzyme";
import SearchBox from "./SearchBox";
import React from "react";

it("Expect to render SearchBox Component", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
