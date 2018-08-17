import { shallow } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";

it("Expect to render Stateful CounterButton Component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual("red");
});
