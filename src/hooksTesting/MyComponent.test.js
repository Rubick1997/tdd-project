import { render, screen } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
    let onCountChange = jest.fn();
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<MyComponent onCountChange={onCountChange} />);
	});
    it("renders", () => {
      expect(wrapper).not.toBeNull()
    })
});
