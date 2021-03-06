import { render, screen } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import MyComponent from "./MyComponent";
import useCustomHook from "./useCustomHook";
import { act } from "react-dom/test-utils";

describe("MyComponent", () => {
  const onCountChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MyComponent onCountChange={onCountChange} />);
  });
  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
  it("shows my default text", () => {
    expect(wrapper.find("p").text()).toEqual("Count: 0");
  });
  it("correctly increments the count by 1", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 1");
  });
  it("correctly increments the count by 4", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 4");
  });

  it("correctly increments the count by 1 use effect", () => {
    expect(onCountChange).toBeCalledTimes(1);
    wrapper.find("button").simulate("click");
    expect(onCountChange).toBeCalledTimes(2);
  });
});

describe.only("useCustomHook", () => {
  let results;
  const renderHook = (hook) => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };

  it("works", () => {
    renderHook(useCustomHook);
    expect(results.count).toEqual(0);
    act(() => {
      results.increment();
    });
    expect(results.count).toEqual(1);
  });
});
