/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-find-by */
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import QuickLinks from "./QuickLinks";
import { render, screen, fireEvent } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { perf, wait } from "react-performance-testing";
import { act } from "react-dom/test-utils";

import "@testing-library/jest-dom/extend-expect";
import "@testing-library/user-event";
Enzyme.configure({ adapter: new Adapter() });

const Props = {
  
};

describe("QuickLinks", () => {
  let wrapper;

  //initializes wrapper for each test & renders component
  beforeEach(() => {
    render(<QuickLinks />);
    wrapper = mount(<QuickLinks />);
  });

  //renders QuickLinks component
  it("Renders QuickLinks correctly", () => {
    shallow(<QuickLinks />);
    //screen.debug();
  });

  //checks for HTML elements
  it("Includes all HTML elements for QuickLinks", () => {
    //expect(wrapper.find("").length).toEqual();
  });
});