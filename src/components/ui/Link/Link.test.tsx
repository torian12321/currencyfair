import * as React from "react";
import { shallow } from "enzyme";
import { Link } from "./Link";

describe("UI Component: Link", () => {
  it("should render a regular link", () => {
    const component = shallow(<Link href="#" caption="Link" />);

    expect(component.exists()).toBe(true);
    expect(component.type()).toEqual("a");
  });

  it("should contain custom text", () => {
    // Given && When
    const linkCaption = "lorem ipsum";
    const component = shallow(<Link href="#" caption={linkCaption} />);
    // Then
    expect(component.text()).toEqual(linkCaption);
  });

  it("should contain custom classname", () => {
    // Given && When
    const linkClassname = "provided-classname";
    const component = shallow(
      <Link href="#" caption="Link" className={linkClassname} />
    );
    // Then
    expect(component.hasClass(linkClassname));
  });
});
