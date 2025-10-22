import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default App;
