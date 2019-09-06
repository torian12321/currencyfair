import * as React from "react";
import { shallow } from "enzyme";
import { Modal } from "./Modal";

describe("UI Component: Modal", () => {
  it("should render null if isVisible property is false", () => {
    // Given & When
    const component = shallow(<Modal isVisible={false}>Content</Modal>);
    // Then
    expect(component.isEmptyRender()).toEqual(true);
  });
});
