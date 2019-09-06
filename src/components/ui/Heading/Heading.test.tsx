import * as React from "react";
import { shallow } from "enzyme";
import { Heading } from "./Heading";

describe("UI Component: Header", () => {
  [1, 2, 3, 4, 5, 6].forEach(level =>
    it(`should correctly render h${level} for level ${level}`, () => {
      // Given
      const props = {
        caption: "Header text",
        /** Default: 1 */
        level
      };
      // When
      const component = shallow(
        <Heading caption="Header text" level={level} />
      );
      // Then
      expect(component.type()).toEqual(`h${level}`);
    })
  );
});
