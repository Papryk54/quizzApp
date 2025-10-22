import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import styles from "./Home.module.scss";
import { useGSAP } from "@gsap/react";
import CategoryPicker from "../../features/CategoryPicker/CategoryPicker";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
	const startSection = useRef<HTMLDivElement>(null);
	const quizSection = useRef<HTMLDivElement>(null);
	const [userReady, setUserReady] = useState(false);

	const handleReady = (ready: boolean) => () => {
		setUserReady(ready);
	};

	useGSAP(() => {
		if (quizSection.current && userReady) {
			gsap.to(window, { duration: 2, scrollTo: quizSection.current });
		}
		if (startSection.current && !userReady) {
			gsap.to(window, { duration: 2, scrollTo: startSection.current });
		}
	}, [userReady]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div
					ref={startSection}
					className="h-screen w-full flex justify-center items-center bg-amber-800"
				>
					<button onClick={handleReady(true)}>
						<h1 className="text-6xl font-bold">Start</h1>
					</button>
				</div>
				<div
					ref={quizSection}
					className="relative h-screen w-full flex justify-center items-center bg-indigo-900"
				>
					<button
						className="absolute top-6 left-6 w-24 h-12 bg-amber-300 rounded-lg"
						onClick={handleReady(false)}
					>
						Cofnij
					</button>
					<div className="w-full h-[80%] flex justify-center items-center">
						<CategoryPicker />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
