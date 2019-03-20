import React from "react";
import Button from "./Button";
import { mount } from "enzyme";

const MOCK_CLASS = "mockClass";
const MOCK_CONTENT = "mockContent";

describe("<Button> ", () => {
  const wrapper = mount(<Button className={MOCK_CLASS}>{MOCK_CONTENT}</Button>);

  it("applies className passed in as prop", async () => {
    expect(wrapper.hasClass(MOCK_CLASS));
  });

  it("renders a <button> element containing children", async () => {
    const expectation = wrapper.find("button").text();

    expect(expectation).toContain(MOCK_CONTENT);
  });
});
