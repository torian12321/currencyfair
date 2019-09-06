import * as React from "react";
import { shallow } from "enzyme";
import { Link } from "./Link";

describe("UI Component: Link", () => {
  it("should render a regular link", () => {
    const component = shallow(<Link to="abc" caption="test" />);

    expect(component.exists()).toBe(true);
  });

  // it("should render a regular link", () => {
  //   const component = shallow(<Link caption={"aaa"} to="abc" />);
  //   // Then
  //   expect(component.hasClass("mwg-btn--block")).toBeTruthy();
  // });
});
