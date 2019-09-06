import * as React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";
import * as sinon from "sinon";

describe("UI Component: Button", () => {
  it("should render", () => {
    // Given && When
    const component = shallow(<Button caption="CustomBtn" />);
    // Then
    expect(component.exists()).toBe(true);
  });

  it("should contain custom text", () => {
    // Given && When
    const btnCaption = "lorem ipsum";
    const component = shallow(<Button caption={btnCaption} />);
    // Then
    expect(component.text()).toEqual(btnCaption);
  });

  it("should be clickable ", () => {
    // Given
    const fn = sinon.stub();
    const component = shallow(<Button onClick={fn} caption="CustomBtn" />);
    // When
    component.simulate("click");
    // Then
    expect(fn.callCount).toBe(1);
  });

  it("should be disabled and not clickable", () => {
    // Given
    const fn = sinon.stub();
    const component = shallow(
      <Button disabled onClick={fn} caption="CustomBtn" />
    );

    // When
    component.simulate("click");

    // Then
    expect(component.props().disabled).toBeTruthy();
    expect(fn.callCount).toBe(0);
  });
});
