import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
import MyComponent from "./hooksTesting/MyComponent";

function App() {

	return (
		<div className='App'>
		<Counter/>
		<MyComponent/>
		</div>
	);
}

export default App;
