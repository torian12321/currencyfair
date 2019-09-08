import * as React from "react";
import { shallow } from "enzyme";
import { Icon } from "./Icon";

describe("UI Component: Icon", () => {
  it("should render a custon icon - phone", () => {
    // Given && When
    const component = shallow(<Icon name="phone" />);

    // Then
    expect(component.exists()).toBe(true);
    expect(component.type()).toEqual("i");
  });

  it("should contain custom classname", () => {
    // Given && When
    const iconClassname = "provided-classname";
    const component = shallow(<Icon name="phone" className={iconClassname} />);

    // Then
    expect(component.hasClass(iconClassname));
  });
});
