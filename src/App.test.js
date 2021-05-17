import { render, screen } from "@testing-library/react";
import Counter from "./Counter"
import App from "./App"
import { shallow, mount } from "enzyme";


describe("Counter Testing", () => {
	let wrapper;
	beforeEach(() => {
    //mount allow to in deep inside the component
		wrapper = mount(<App />);
	});

	test("renders the title of counter", () => {
		expect(wrapper.find("h1").text()).toContain("This is counter app");
		//old version
		// const { getByText } = render(<App />);
		// const linkEl = getByText("This is counter app");
		// expect(linkEl).toBeInTheDocument();
	});

	test("render a butoon with incrment text", () => {
		expect(wrapper.find("#increment-btn").text()).toBe("Increment");
	});

	test("render the initial value of state in div", () => {
		expect(wrapper.find("#counter-value").text()).toBe("0");
	});

	test("render click event of increment buton and increment value", () => {
		wrapper.find("#increment-btn").simulate("click");
		expect(wrapper.find("#counter-value").text()).toBe("1");
	});

  	test("render click event of decrement buton and decrement value", () => {
			wrapper.find("#increment-btn").simulate("click");
			expect(wrapper.find("#counter-value").text()).toBe("1");
      wrapper.find("#decrement-btn").simulate("click");
      expect(wrapper.find("#counter-value").text()).toBe("0");
		});
});
