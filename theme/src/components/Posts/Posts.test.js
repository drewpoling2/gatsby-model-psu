/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-find-by */
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Posts from "./Posts";
import { render, screen, fireEvent } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { perf, wait } from "react-performance-testing";
import { act } from "react-dom/test-utils";

import "@testing-library/jest-dom/extend-expect";
import "@testing-library/user-event";
Enzyme.configure({ adapter: new Adapter() });

const Props = {
  
};

describe("Posts", () => {
  let wrapper;

  //initializes wrapper for each test & renders component
  beforeEach(() => {
    render(<Posts />);
    wrapper = mount(<Posts />);
  });

  //renders Posts component
  it("Renders Posts correctly", () => {
    shallow(<Posts />);
    //screen.debug();
  });

  //checks for HTML elements
  it("Includes all HTML elements for Posts", () => {
    //expect(wrapper.find("").length).toEqual();
  });
});