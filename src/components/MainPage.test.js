import { shallow } from "enzyme";
import MainPage from "./MainPage";
import React from "react";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders mainpage without creashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filter robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "john",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots([])).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com"
    }
  ]);
});

it("filter robots correctly2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "a",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots([])).toEqual(filteredRobots);
});
