import * as React from "react";
import { shallow } from "enzyme";
import { Spinner } from "components/ui";
import { Button } from "./Button";
import * as sinon from "sinon";

describe("UI Component: Button", () => {
  it("should render", () => {
    // Given && When
    const component = shallow(<Button caption="CustomBtn" />);
    // Then
    expect(component.exists()).toBe(true);
    expect(component.type()).toEqual("button");
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

  it("should be loading, not clickable and with an Spinner", () => {
    // Given
    const fn = sinon.stub();
    const component = shallow(
      <Button loading onClick={fn} caption="CustomBtn" />
    );

    // When
    component.simulate("click");

    // Then
    expect(component.find(Spinner).length).toEqual(1);
    expect(component.props().disabled).toBeTruthy();
    expect(fn.callCount).toBe(0);
  });
});
